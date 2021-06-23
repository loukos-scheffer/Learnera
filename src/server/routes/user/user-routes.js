// Contains all end points matching /api/user/*
const express = require("express");
let router = express.Router();

const AuthService = require("../../services/AuthService");
const UuidService = require("../../services/UuidService");
const JwtService = require("../../services/JwtService");
const CookieService = require('../../services/CookieService');

const User = require('../../models/userModel');
const Auth = require('../../models/authModel');

router.post("/login", async (req, res) => {
    if(!req.body.email || !req.body.password){
        return res.status(400).json({msg: "Please fill out all fields"});
    }

    User.find({email: req.body.email, password: req.body.password}, async (err, data) => {
        if(err) console.log(err);
        
        if (data.length === 1) {
            let found_user = data[0]; 
            let jwt = JwtService.generateAuthJwt(found_user);

            AuthService.saveAuthDocument(found_user, jwt);
            CookieService.sendCookie(res, jwt);

            res.status(200).send({
                msg: 'LOGIN SUCESSFUL'
            });

        } else {
            res.status(401).send({
                msg: 'LOGIN FAILED'
            });
        }
    })
});

router.post('/register', async (req, res) => {
    // creates new user
    if(!req.body.email || !req.body.password || !req.body.firstName || !req.body.lastName){
        return res.status(400).json({msg: "Please fill out all fields"});
    }
    const new_user = new User();
    new_user.uid = UuidService.generateUuid();
    new_user.email = req.body.email;
    new_user.password = req.body.password;
    new_user.firstName = req.body.firstName;
    new_user.lastName = req.body.lastName;
    new_user.save();

    res.status(200).send({
        msg: 'User Created Succesfully'
    });
});

router.get('/me', AuthService.validateCookie, async (req, res) => {
    let user = await JwtService.getUserFromJwt(req.cookies.session_id);
    res.status(200).send({body: user});
});

router.put('/updateuser', AuthService.validateCookie, async (req, res) => {
    // updates an existing user
    if(!req.body.email || !req.body.firstName || !req.body.lastName){
        return res.status(400).json({msg: "Please fill out all fields"});
    }
    let user = await JwtService.getUserFromJwt(req.cookies.session_id);

    if (!user){
        res.status(404).send({
            msg: 'User Not Found'
        });
    }

    user.email = req.body.email;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.save();

    res.status(200).send({
        msg: 'User Updated Succesfully'
    });
});

module.exports = router;