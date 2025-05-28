import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import cookie from "cookie-parser";

export const RegisterAccount = async (req, res) => {
  try {
    const { userName, userEmail, userNumber, userPassword } = req.body;

    if (!userName || !userEmail || !userNumber || !userPassword) {
      res.status(401).json({
        success: false,
        message: "All Fields Are Required",
      });
    }

    const hashPassword = await bcrypt.hash(userPassword, 10);

    const existingUser = await User.findOne({ userEmail });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists with this email",
      });
    }

    const newUser = new User({
      userName: userName,
      userEmail: userEmail,
      userNumber: userNumber,
      userPassword: hashPassword,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "Successfully Create",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed To Create. Try Again",
      error: error,
    });
  }
};

export const LoginAccount = async (req, res) => {
  try {
    const { userName, userEmail, userPassword } = req.body;

    if (!userName || !userEmail || !userPassword) {
      console.log("All Fields Are required");
    }

    const user = await User.findOne({ userEmail });

    if (!user) {
      res.status(400).json({
        success: false,
        message: "User Not Find",
      });
    }

    const match = await bcrypt.compare(
      req.body.userPassword,
      user.userPassword
    );

    if (!match) {
      res.status(400).json({
        message: "Invlide Email & Password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        userName: userName,
        userEmail: userEmail,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.JWT_SECRET_KEY || "localhost",
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "strict",
    });

    res.status(201).json({
      success: true,
      message: "Login Successfully",
      user: {
        _id: user._id,
        userName: user.userName,
        userEmail: user.userEmail,
        userNumber: user.userNumber,
      },
      token: token,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "Failed To Login Account",
    });
  }
};
