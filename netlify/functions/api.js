import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();

app.use(express.json());
api.use("/api/", router);

const logs = [];
const log = (a) => {
  logs.push(a);
};

router.post("/", (req, res) => {
  const referer = req.headers.referer || req.headers.referrer;
  log("Referer:" + referer);
  log("body: ", JSON.stringify(req.body));
  if (!body) {
    log("NO BODY");
  }
  res.send("Referer logged");
});
router.get("/log", (req, res) => {
  res.json({ logs });
});

export const handler = serverless(api);
