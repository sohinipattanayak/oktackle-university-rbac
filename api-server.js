


const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const { auth } = require("express-oauth2-jwt-bearer");
const authConfig = require("./src/auth_config.json");

const app = express();

const port = process.env.API_PORT || 3001;
const appPort = process.env.SERVER_PORT || 3000;
const appOrigin = authConfig.appOrigin || `http://localhost:${appPort}`;

if (
  !authConfig.domain ||
  !authConfig.audience ||
  authConfig.audience === "YOUR_API_IDENTIFIER"
) {
  console.log(
    "Exiting: Please make sure that auth_config.json is in place and populated with valid domain and audience values"
  );

  process.exit();
}

app.use(morgan("dev"));
app.use(helmet());
app.use(cors({ origin: appOrigin }));

const checkJwt = auth({
  audience: authConfig.audience,
  issuerBaseURL: `https://${authConfig.domain}/`,
  algorithms: ["RS256"],
});

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
