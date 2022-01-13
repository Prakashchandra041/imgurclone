const express = require('express');
const Contest = require("../model/contest.model");
const router = express.Router();

router.get("", async (req, res) => {
    const contest = await Contest.find().lean().exec();
    return res.status(200).send(contest);
})

router.post("", async (req, res) => {
    const contest = await Contest.create(req.body);
    return res.status(201).send(contest);
})
module.exports = router;