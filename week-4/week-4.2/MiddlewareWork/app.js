// app.js
const express = require("express");
const app = express();
const port = 3000;

// Middleware function to log request details
const requestLogger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// Use the middleware
app.use(requestLogger);

// Route handler
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Middleware function to check if user is old enough
const isOldEnoughMiddleware = (req, res, next) => {
  const userAge = req.query.age; // Assuming age is passed as a query parameter

  if (!userAge) {
    return res.status(400).send("Age is required");
  }

  if (parseInt(userAge, 10) >= 18) {
    next(); // User is old enough, proceed to the next middleware/route handler
  } else {
    res.status(403).send("You must be at least 18 years old");
  }
};

// Use the middleware for a specific route
app.get("/restricted", isOldEnoughMiddleware, (req, res) => {
  res.send("Welcome to the restricted area!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
