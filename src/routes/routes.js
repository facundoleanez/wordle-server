const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});
router.get("/s", (req, res) => {
  res.json("Hello world");
});

module.exports = router;
