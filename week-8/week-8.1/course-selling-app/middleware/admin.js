const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();
// console.log(process.env.JWT_SECRET_admin);

function adminMiddleware(req, res, next) {
  const token = req.headers.token;
  const decoded = jwt.verify(token, process.env.JWT_SECRET_admin);

  if (decoded) {
    req.userId = decoded.id;
    next();
  } else {
    res.status(403).json({
      message: "You are not signed in",
    });
  }
}

module.exports = {
  adminMiddleware,
};
