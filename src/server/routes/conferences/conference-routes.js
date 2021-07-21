// Contains all end points matching /api/conference/*

const express = require("express");
const Conference = require('../../models/conferenceModel');
const User = require('../../models/userModel');
const AuthService = require("../../services/AuthService");
const UuidService = require("../../services/UuidService");
const JwtService = require("../../services/JwtService");
let router = express.Router();

/** POST /api/conference/post
 @body: title String, body String
 @return:
 - 200 OK: Conference is successfully created and uploaded to the database.
 - 400 BAD REQUEST: If the request is improperly formatted.
 */
router.post('/post', AuthService.validateCookie, async (req, res) => {
    // creates new thread on the forum
    let user = await JwtService.getUserFromJwt(req.cookies.session_id);
    if(!req.body.title || !req.body.zoomLink || !req.body.meetingId || !req.body.passcode || !req.body.date){
        return res.status(400).json({msg: "Please fill out all fields"});
    }
    const post = new Conference();
    post.conId = UuidService.generateUuid();
    post.uid = user.get("uid");
    post.title = req.body.title;
    post.zoomLink = req.body.zoomLink;
    post.passcode = req.body.passcode;
    post.meetingId = req.body.meetingId;
    post.likes = 0;
    post.date = req.body.date
    post.expiryDate = new Date(post.date.getTime() + 86400000);;
    post.save();

    res.status(200).send({
        msg: 'Conference Created Succesfully'
    });
});

module.exports = router;