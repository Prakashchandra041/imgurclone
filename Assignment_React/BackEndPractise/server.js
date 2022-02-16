const express = require("express");
const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/Vikram");
};

// step-1 create schema

const UserSchema = new mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: false },
  Age: { type: Number, require: true },
  gender: { type: String, require: true },
});

// step-2 connect the schema to the user collection

const User = mongoose.model("user", UserSchema);
const app = express();
app.use(express.json());

//----------CRUD APIS  for users-------------
// Post:-create user
app.post("/user", async (req, res) => {
  const user = await User.create(req.body); //db.user.insert
  return res.status(201).send({ user });
});

// Get all users
app.get("/users", async (req, res) => {
  const users = await User.find().lean().exec();
  return res.status(200).send({ users });
});

// // Patch Update user

app.patch("/user/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, })
  return res.status(200).send({ user });
});

// delete single user
app.delete("user/:id", async (req,res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  return res.status(200).send({ user });
}) 
// get single user
app.get("/user/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  return res.status(200).send({ user });
})

app.listen(2324, async function () {
  await connect();
  console.log("listening to port number 2324");
});
