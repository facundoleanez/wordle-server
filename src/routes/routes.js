require("../database.js");
const express = require("express");
const router = express.Router();

const WordLen4 = require("../model/Word.js");

router.get("/", (req, res) => {
  WordLen4.findOneRandom(function (err, result) {
    if (!err) {
      res.json(result);
      console.log(result);
    }
  });
});
module.exports = router;
