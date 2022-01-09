const express = require('express');
const Student = require("../model/student.model");

const router = express.Router();

router.get("",async(req, res) => {
    const student = await Student.find().lean().exec();
    return res.status(200).send(student);
})

router.post("", async (req, res) => {
    const student = await Student.create(req.body);
   return res.status(201).send(student);
})

module.exports = router;