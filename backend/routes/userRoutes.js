const { model } = require("mongoose");
const express = require('express');
const router = express.Router();


router.post('/register', (req, res) => {
  // Registration logic here
  res.status(201).json({ message: "User registered successfully" });
});

router.post('/login', (req, res) => {
  // Login logic here
  res.status(200).json({ message: "User logged in successfully" });
});

router.get('/profile', (req, res) => {
  // Fetch user profile logic here
  res.status(200).json({ message: "User profile fetched successfully" });
});

module.exports = router;