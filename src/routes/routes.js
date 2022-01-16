const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    word: "house",
    len: 5,
    report: 0,
  });
});

module.exports = router;
