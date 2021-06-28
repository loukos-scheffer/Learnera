// Contains all end points matching /api/thread/*

const express = require("express");
const Thread = require('../../models/threadModel');
const UuidService = require("../../services/UuidService");
let router = express.Router();

router.post("/test", (req, res) => {

});

router.post('/post', async (req, res) => {
    // creates new thread on the forum
    if(!req.body.uid|| !req.body.title || !req.body.body){
        return res.status(400).json({msg: "Please fill out all fields"});
    }
    const post = new Thread();
    post.tid = UuidService.generateUuid();
    post.uid = req.body.uid;
    post.title = req.body.title;
    post.body = req.body.body;
    post.likes = 0;
    post.date = Date.now();
    post.save();

    res.status(200).send({
        msg: 'Thread Created Succesfully'
    });
});

module.exports = router;