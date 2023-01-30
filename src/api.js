const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/users", (req, res) => {
	res.send("<h1>HELLO USER</h1>");
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
