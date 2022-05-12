require("dotenv").config();
const express = require("express");
const router = express.Router();
//argon2 de ma hoa password
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const veryfyToken = require("../middleware/auth");

const User = require("../models/User");

//@router POST api/auth/register
//@desc Register user
//@access Public

router.post("/register", async (req, res) => {
  const { fullname, username, password } = req.body;
  // Simple validation
  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Thiếu tên người dùng hoặc mật khẩu" });
  }
  try {
    //Check for existing use
    const user = await User.findOne({ username });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "Tài khoản đã tồn tại" });
    }
    // All good
    const hashedPassword = await argon2.hash(password);
    const newUser = new User({
      fullname,
      username,
      password: hashedPassword,
    });
    await newUser.save();

    //Return token
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({
      success: true,
      message: "Đăng ký tài khoản thành công",
      user: newUser.fullname,
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Lỗi máy chủ" });
  }
});

//@router GET api/auth
//@desc Login user
//@access Public
router.get("/", veryfyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }
    res.json({ success: true, user: user.fullname });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

//@router POST api/auth/login
//@desc Login user
//@access Public

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  //Simple validation
  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Missing username and/or password" });
  }
  try {
    //Check for existing user
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Tên đăng nhập hoặc mật khẩu không đúng",
      });
    }
    //User name found
    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid) {
      return res.status(400).json({
        success: false,
        message: "Tên đăng nhập hoặc mật khẩu không đúng",
      });
    }
    //All good
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({
      success: true,
      message: "User login success",
      accessToken,
      user: user.fullname,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Lỗi máy chủ nội bộ" });
  }
});

module.exports = router;
