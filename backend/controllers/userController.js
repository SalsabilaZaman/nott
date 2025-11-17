const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc Register a new user
// @route POST /api/users/register
// @access Public
const registerUser = asyncHandler(async(req, res) => {
  const { username, email, password } = req.body;

  // Basic validation
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
//   console.log(hashedPassword);
  // Create new user
  const newUser = await User.create({
    name: username.trim(),
    email: email.trim(),
    password: hashedPassword,
  });
  if(newUser){
    res.status(201).json({_id: newUser._id, name: newUser.name, email: newUser.email});
  }
  else{
    res.status(400);
    throw new Error("Invalid user data");
  }  
  res.status(201).json({ message: "User registered successfully"});
});

// @desc Login a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async(req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }

  // Check for user
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.status(200).json({ message: "User logged in successfully", user });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async(req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
};

