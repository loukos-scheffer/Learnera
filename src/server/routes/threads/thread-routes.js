// Contains all end points matching /api/thread/*

const express = require("express");
const Thread = require('../../models/threadModel');
const User = require('../../models/userModel');
const AuthService = require("../../services/AuthService");
const UuidService = require("../../services/UuidService");
const JwtService = require("../../services/JwtService");
let router = express.Router();

router.post("/test", (req, res) => {

});

router.post('/post', AuthService.validateCookie, async (req, res) => {
    // creates new thread on the forum
    let user = await JwtService.getUserFromJwt(req.cookies.session_id);
    if(!req.body.title || !req.body.body){
        return res.status(400).json({msg: "Please fill out all fields"});
    }
    const post = new Thread();
    post.tid = UuidService.generateUuid();
    post.uid = user.get("uid");
    post.title = req.body.title;
    post.body = req.body.body;
    post.likes = 0;
    post.date = Date.now();
    post.save();

    res.status(200).send({
        msg: 'Thread Created Succesfully'
    });
});

router.get('/search', async (req, res) => {
    // creates new thread on the forum
    if(req.body.query === undefined){
        return res.status(400).json({msg: "Please fill out all fields"});
    }
    if (req.body.query === ""){
        const query = Thread.find({}, async (err, data) => {
            if (err) console.log(err);

            console.log(data);

            if (data.length > 0) {
                res.status(200).send(data);

            } else {
                res.status(404).send({
                    msg: 'NO THREADS EXIST'
                });
            }
        });
    } else {
        const query = Thread.find({title: {"$regex": req.body.query, "$options": "i"}}, async (err, data) => {
            if (err) console.log(err);

            console.log(data);

            if (data.length > 0) {
                res.status(200).send(data);

            } else {
                res.status(404).send({
                    msg: 'NO THREADS FOUND MATCHING THIS TITLE'
                });
            }
        });
    }
});

module.exports = router;