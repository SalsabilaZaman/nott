const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    // If no token → simply continue (optional)
    // return next();
    return res.status(401).json({ message: "No token provided" }); //required
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      // return next(); // token invalid → still optional
      return res.status(403).json({ message: "Invalid token" }); // required
    }

    req.user = decoded.user;
    next();
  });
});

module.exports = validateToken;
