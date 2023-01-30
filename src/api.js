const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/users", (req, res) => {
  res.send({ message: "This is user route" });
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
