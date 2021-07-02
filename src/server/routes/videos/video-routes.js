// Contains all end points matching /api/videos/*
const express = require("express");
let router = express.Router();

/** GET /api/videos/get-categories
 @body:
 @return:
 - 200 OK: Sends the categories of E-Learning videos as the response body.
 */
router.get("/get-categories", async (req, res) => {
    res.status(200).json({
        categories: [
            "Business", "Finance & Accounting", "IT & Software", "Personal Development", "Marketing", "Teaching & Academics"
        ]
    });
});

module.exports = router;