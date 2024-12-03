const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

function userMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({
      message: "No token provided",
    });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_user);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid token",
    });
  }
}

module.exports = {
  userMiddleware,
};
