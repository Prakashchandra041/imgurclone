const express = require('express');
const app = express();
const connect = require("./config/db");
app.use(express.json());

let studentController = require("./controller/student.controller");
let contestController = require("./controller/contest.controller");
app.use("/contests", contestController);
app.use("/students",studentController)
//admin controller add today.
let { register, login } = require("./controller/admin.controller");

app.post("/register", register);
app.post("/login", login);

app.listen(2345, async () => {
    await connect();
    console.log("connected to port 2345");
})