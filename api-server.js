// api/server.js (Assuming your backend server file is here)

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const { auth } = require("express-oauth2-jwt-bearer");
// api/server.js

require('dotenv').config(); // Load environment variables


const app = express();

// Retrieve environment variables
const DOMAIN = process.env.DOMAIN;
const AUDIENCE = process.env.AUDIENCE;
const APP_ORIGIN = process.env.APP_ORIGIN || "http://localhost:3000";
const port = process.env.API_PORT;

// Validate essential environment variables
if (
  !DOMAIN ||
  !AUDIENCE ||
  AUDIENCE === "YOUR_API_IDENTIFIER"
) {
  console.error(
    "Error: Missing or invalid Auth0 configuration. Please set DOMAIN and AUDIENCE environment variables correctly."
  );
  process.exit(1);
}

app.use(morgan("dev"));
app.use(helmet());
app.use(cors({ origin: APP_ORIGIN }));

const checkJwt = auth({
  audience: AUDIENCE,
  issuerBaseURL: `https://${DOMAIN}/`,
  algorithms: ["RS256"],
});

// Define routes
app.get("/api/external", checkJwt, (req, res) => {
  res.send({
    msg: "Your access token was successfully validated!",
  });
});

app.get("/api/basic-course", checkJwt, (req, res) => {
  const permissions = req.auth.permissions || [];
  if (permissions.includes("access:basic-course")) {
    res.json({ message: "Welcome to the Basic Student Course!" });
  } else {
    res.status(403).json({ message: "Access Denied. You don't have access to the Basic Course." });
  }
});

app.get("/api/premium-course", checkJwt, (req, res) => {
  const permissions = req.auth.permissions || [];
  if (permissions.includes("access:premium-course")) {
    res.json({ message: "Welcome to the Premium Instructor Course!" });
  } else {
    res.status(403).json({ message: "Access Denied. You don't have access to the Premium Course." });
  }
});

app.listen(port, () => console.log(`API Server listening on port ${port}`));
