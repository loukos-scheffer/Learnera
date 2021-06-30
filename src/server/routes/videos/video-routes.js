// Contains all end points matching /api/videos/*
const express = require("express");
let router = express.Router();


router.get("/get-categories", async (req, res) => {
    res.status(200).json({
        categories: [
            "Business", "Finance & Accounting", "IT & Software", "Personal Development", "Marketing", "Teaching & Academics"
        ]
    });
});

module.exports = router;