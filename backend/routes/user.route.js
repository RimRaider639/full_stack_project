const express = require("express");
const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const saltRounds = 5;

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { userName, email, pwd } = req.body;
  try {
    const found = await User.find({ $or: [{ email }, { userName }] });
    if (found.length)
      res.send({ msg: "Email or Username already has an account" });
    const hash = bcrypt.hashSync(pwd, saltRounds);
    const newUser = User({ ...req.body, pwd: hash });
    await newUser.save();
    res.send({ msg: "User successfully registered" });
  } catch (error) {
    res.send({ msg: error.message || "error occurred" });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, pwd } = req.body;
  try {
    const found = await User.find({ email });
    if (!found.length) res.send({ msg: "Wrong email address" });
    console.log(found);
    const match = await bcrypt.compare(pwd, found[0].pwd);
    // const match = bcrypt.compareSync(found[0].pwd, pwd);
    console.log(match);
    if (!match) res.send("Wrong password");
    const token = jwt.sign({ _id: found[0].id }, process.env.KEY);
    res.send({ msg: "Successfully logged in", token });
  } catch (error) {
    res.send({ msg: error.message || "error occurred" });
  }
});

module.exports = { userRouter };
