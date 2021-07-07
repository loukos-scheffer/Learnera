// Contains all end points matching /api/videos/*
const express = require("express");
let router = express.Router();
const UuidService = require("../../services/UuidService");
const AuthService = require("../../services/AuthService");
const VideoService = require("../../services/VideoService");
const JwtService = require("../../services/JwtService");
const Video = require('../../models/videoModel');
/** GET /api/videos/get-categories
 @body:
 @return:
 - 200 OK: Sends the categories of E-Learning videos as the response body.
 */
router.get("/get-categories", async (req, res) => {
    res.status(200).json({
        categories: VideoService.categories
    });
});

router.post('/upload', AuthService.validateCookie, async (req, res) => {
    let user = await JwtService.getUserFromJwt(req.cookies.session_id);
    if(!req.body.title || !req.body.body || !req.body.url || !req.body.categories){
        return res.status(400).json({msg: "Please fill out all fields"});
    }

    const video = new Video();
    video.vid = UuidService.generateUuid();
    video.uid = user.get("uid");
    video.title = req.body.title;
    video.body = req.body.body;
    video.url = req.body.url;
    video.categories = req.body.categories;
    video.likes = 0;
    video.date = Date.now();
    video.save();
    
    res.status(200).send({
        msg: 'Video uploaded succesfully'
    });
});

module.exports = router;