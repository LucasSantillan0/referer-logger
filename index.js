require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.port || 3000;

const logs = [];
const log = (a) => {
  logs.push(a);
};

app.post("/", (req, res) => {
  const referer = req.headers.referer || req.headers.referrer;
  log("Referer:" + referer);
  res.send("Referer logged");
});
app.get("/log", (req, res) => {
  res.json({ logs });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
