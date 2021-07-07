// Contains all end points matching /api/message/*

const express = require("express");
const Thread = require('../../models/likeModel');
const AuthService = require("../../services/AuthService");
const JwtService = require("../../services/JwtService");
let router = express.Router();

router.post("/test", (req, res) => {
    console.log("test");
    res.send(200);
});

module.exports = router;