// Contains all end points matching /api/user/*

const express = require("express");
const UuidService = require("../../services/UuidService");
const JwtGenerator = require("../../services/JwtGenerator");

const User = require('../../models/userModel');
const Auth = require('../../models/authModel');
let router = express.Router();

router.post("/login", (req, res) => {
    if(!req.body.email || !req.body.password){
        return res.status(400).json({msg: "Please fill out all fields"});
    }

    User.find({email: req.body.email, password: req.body.password}, (err, data) => {
        if(err) console.log(err);
        
        if (data.length === 1) {
            let found_user = data[0];

            let jwt = JwtGenerator.generateAuthJwt(found_user);
            const new_auth = new Auth();
            new_auth.jwt = jwt;
            new_auth.save();

            res.status(200).send({
                msg: 'LOGIN SUCESSFUL',
                body: {
                    jwtToken: jwt
                }
            });

        } else {
            res.status(401).send({
                msg: 'LOGIN FAILED'
            });
        }     

    })

});

router.post('/register', (req, res) => {
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

    let jwt = JwtGenerator.generateAuthJwt(new_user);

    const new_auth = new Auth();
    new_auth.jwt = jwt;
    new_auth.save();
    
    res.status(200).send({
        msg: 'User Created Succesfully',
        body: {
            jwtToken: jwt
        }
    });
});

module.exports = router;