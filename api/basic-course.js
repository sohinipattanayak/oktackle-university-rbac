// api/basic-course.js

const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");

// Retrieve environment variables
const DOMAIN = process.env.DOMAIN;
const AUDIENCE = process.env.AUDIENCE;

// Initialize JWKS client
const client = jwksClient({
  jwksUri: `https://${DOMAIN}/.well-known/jwks.json`,
});

// Function to get the signing key
function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    if (err) {
      callback(err);
    } else {
      const signingKey = key.getPublicKey();
      callback(null, signingKey);
    }
  });
}

module.exports = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ message: "Missing Authorization Header" });
    return;
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(
    token,
    getKey,
    { audience: AUDIENCE, issuer: `https://${DOMAIN}/`, algorithms: ["RS256"] },
    (err, decoded) => {
      if (err) {
        console.error("JWT Verification Error:", err);
        res.status(401).json({ message: "Unauthorized" });
        return;
      }

      const permissions = decoded.permissions || [];

      if (permissions.includes("access:basic-course")) {
        res.status(200).json({ message: "Welcome to the Basic Student Course!" });
      } else {
        res.status(403).json({ message: "Access Denied. You don't have access to the Basic Course." });
      }
    }
  );
};
