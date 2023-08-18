require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
  const referer = req.headers.referer || req.headers.referrer;
  console.log("Referer:", referer);
  res.send("Referer logged");
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
