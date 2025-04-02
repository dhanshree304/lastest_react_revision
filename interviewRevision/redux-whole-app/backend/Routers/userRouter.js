const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userModel } = require("../Models/userModel");

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  const { email, password, role, name } = req.body;

  const isUser = await userModel.findOne({ email });

  if (isUser) {
    res.status(200).json({ msg: "User is already exist, Please login" });
  } else {
    bcrypt.hash(password, 6, async function (err, hash) {
      if (err) {
        res.status(500).json({ msg: "Error in converting password into hash" });
      }
      const new_user = new userModel({
        email,
        password: hash,
        name,
        role,
      });

      await new_user.save();
      res.status(200).json({ msg: "SignUp Successfull" });
    });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const isUser = await userModel.findOne({ email });
  if (!isUser) {
    res.send(500).json({ msg: "User is not present,Please Signup first" });
  }
  const hash = isUser.password;
  bcrypt.compare(password, hash, async function (err, result) {
    const secretKey = "abcde@123";
    if (err) {
      res.send("User and Bcrypt password does not match");
    }
    if (result) {
      const token = jwt.sign({ email }, secretKey);
      res.status(200).json({ msg: "logged in successfully", token:token });
    } else {
      res.status(500).json({ msg: "Something went wrong" });
    }
  });
});

module.exports = userRouter;
