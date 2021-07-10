// Contains all end points matching /api/message/*

const express = require("express");
const Like = require('../../models/likeModel');
const Thread = require('../../models/threadModel');
const Video = require('../../models/videoModel');
const Comment = require('../../models/commentModel');
const AuthService = require("../../services/AuthService");
const JwtService = require("../../services/JwtService");
const LikeService = require("../../services/LikeService");
let router = express.Router();


router.post('/thread', AuthService.validateCookie, async (req, res) =>{
    if(!req.body.target){
        return res.status(400).json({msg: "Please send like target!"});
    }
    let user = await JwtService.getUserFromJwt(req.cookies.session_id);

    let exists = await LikeService.changeLike(user.uid, req.body.target);

    if(exists){
        Thread.findOneAndUpdate({tid: req.body.target}, {$inc: {'likes': 1}}, {new:true}, async (err, data) => {
            if(err){
                console.log(err)
                return;
            };
            if(!data){
                res.status(400).send({"msg": "Incorrect tid"});
                return;
            }
            res.status(200).send({"msg": "Thread Liked"});
        })
    }else{
        Thread.findOneAndUpdate({tid: req.body.target}, {$inc: {'likes': -1}}, {new:true}, async (err, data) => {
            if(err){
                console.log(err)
                return;
            };
            if(!data){
                res.status(400).send({"msg": "Incorrect tid"});
                return;
            }
            res.status(200).send({"msg": "Thread Unliked"});
        })
    }
    
});


router.post('/video', AuthService.validateCookie, async (req, res) =>{
    if(!req.body.target){
        return res.status(400).json({msg: "Please send like target!"});
    }
    let user = await JwtService.getUserFromJwt(req.cookies.session_id);

    let exists = await LikeService.changeLike(user.uid, req.body.target);

    if(exists){
        Video.findOneAndUpdate({vid: req.body.target}, {$inc: {'likes': 1}}, {new:true}, async (err, data) => {
            if(err){
                console.log(err)
                return;
            };
            if(!data){
                res.status(400).send({"msg": "Incorrect vid"});
                return;
            }
            res.status(200).send({"msg": "Video Liked"});
        })
    }else{
        Video.findOneAndUpdate({vid: req.body.target}, {$inc: {'likes': -1}}, {new:true}, async (err, data) => {
            if(err){
                console.log(err)
                return;
            };
            if(!data){
                res.status(400).send({"msg": "Incorrect vid"});
                return;
            }
            res.status(200).send({"msg": "Video Unliked"});
        })
    }
    
});




router.post('/comment', AuthService.validateCookie, async (req, res) =>{
    if(!req.body.target){
        return res.status(400).json({msg: "Please send like target!"});
    }
    let user = await JwtService.getUserFromJwt(req.cookies.session_id);

    let exists = await LikeService.changeLike(user.uid, req.body.target);

    if(exists){
        Comment.findOneAndUpdate({cid: req.body.target}, {$inc: {'likes': 1}}, {new:true}, async (err, data) => {
            if(err){
                console.log(err)
                return;
            };
            if(!data){
                res.status(400).send({"msg": "Incorrect cid"});
                return;
            }
            res.status(200).send({"msg": "Comment Liked"});
        })
    }else{
        Comment.findOneAndUpdate({cid: req.body.target}, {$inc: {'likes': -1}}, {new:true}, async (err, data) => {
            if(err){
                console.log(err)
                return;
            };
            if(!data){
                res.status(400).send({"msg": "Incorrect cid"});
                return;
            }
            res.status(200).send({"msg": "Comment Unliked"});
        })
    }
});


router.post('/hasLiked', AuthService.validateCookie, async (req, res) => {
    if(!req.body.target){
        return res.status(400).json({msg: "Please send like target!"});
    }
    let user = await JwtService.getUserFromJwt(req.cookies.session_id);
    let hasLiked = await LikeService.hasLiked(user.uid, req.body.target);
    res.status(200).send(hasLiked != null);
});

module.exports = router;