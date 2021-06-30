// Contains all end points matching /api/comment/*

const express = require("express");
const Comment = require('../../models/commentModel');
const AuthService = require("../../services/AuthService");
const UuidService = require("../../services/UuidService");
const JwtService = require("../../services/JwtService");
let router = express.Router();


router.post('/post', AuthService.validateCookie, async (req, res) => {
    // creates new comment on the forum
    let user = await JwtService.getUserFromJwt(req.cookies.session_id);
    if(!req.body.tid || !req.body.body){
        return res.status(400).json({msg: "Please fill out all fields"});
    }
    const post = new Comment();
    post.cid = UuidService.generateUuid();
    post.tid = req.body.tid;
    post.uid = user.get("uid");
    post.body = req.body.body;
    post.likes = 0;
    post.date = Date.now();
    post.save();

    res.status(200).send({
        msg: 'Comment Created Succesfully'
    });
});

module.exports = router;