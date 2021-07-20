// Contains all end points matching /api/user/*
const express = require("express");
let router = express.Router();

const AuthService = require("../../services/AuthService");

const ZoomService = require("../../services/ZoomService");

router.post("/signature", AuthService.validateCookie, async (req, res) => {
    if(req.body.meetingNumber === undefined || req.body.role === undefined) {
        return res.status(400).json({msg: "Meeting number and Role are required"});
    }

    let signature = ZoomService.generateSignature("6Dv-V5LvQoueNe_kwjTddw", "a5VNYZuFJZ7oEq0UEG5Umm4nS6MwU4yd0mF0", req.body.meetingNumber, req.body.role);

    res.status(200).send({
        "signature": signature
    });
});

module.exports = router;