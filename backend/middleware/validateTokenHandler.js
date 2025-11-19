const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

// const validateToken = asyncHandler(async (req, res, next) => {
//   const authHeader = req.headers.authorization || req.headers.Authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     res.status(401);
//     throw new Error("No token provided");
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // Attach decoded user info to request object
//     next();
//   } catch (error) {
//     res.status(401);
//     throw new Error("Invalid token");
//   }
// });

const validateToken = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  // If no token → simply continue (optional)
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next();
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(); // token invalid → still optional
    }

    req.user = decoded.user;
    next();
  });
});

module.exports = validateToken;
