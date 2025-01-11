const jwt = require("jsonwebtoken");
const { JWT_SECRET } = "gayushiod";

function auth(req, res, next) {
  const token = req.headers.authorization;

  const response = jwt.verify(token, JWT_SECRET);

  if (response) {
    req.userId = decodedData.id;
    next();
  } else {
    res.status(403).send({
      message: "Incorrect credentials",
    });
  }
}

module.exports = {
  auth,
  JWT_SECRET,
};
