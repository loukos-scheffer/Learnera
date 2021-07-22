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
    // creates new conference on the forum
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

/** POST /api/conference/search
 @body: query String
 @return:
 - 200 OK: Conference's that have not yet expired with query matching any substring of the title have been located, then sorted by expiry date, will be sent as a response.
 - 400 BAD REQUEST: If the query field does not exist in the request.
 - 404 NOT FOUND: If no non-expired conferences are found with query matching a substring of the title.
 */
router.post('/search', async (req, res) => {
    // search for conferences that are not yet expired
    if(req.body.query === undefined) {
        return res.status(400).json({msg: "Please fill out all fields"});
    }

    if (req.body.query === "") {
        const query = Conference.find({expiryDate: {$gte: Date.now()}}, async (err, data) => {
            if (err){
                console.log(err);
                res.status(500).send();
            }else{
                res.status(200).send(data);
            }
        }).sort({expiryDate: 1});
    } else {
        const query = Conference.find({title: {"$regex": req.body.query, "$options": "i"}, expiryDate: {$gte: Date.now()}}, async (err, data) => {
            if (err){
                console.log(err);
                res.status(500).send();
            }else{
                res.status(200).send(data);
            }
        }).sort({expiryDate: 1});
    }
});


module.exports = router;