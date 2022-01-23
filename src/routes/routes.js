const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { model } = mongoose;

const WordLen4 = model("WordLen4", require("../model/Word.js"));
const WordLen5 = model("WordLen5", require("../model/Word.js"));
const WordLen6 = model("WordLen6", require("../model/Word.js"));
const WordLen7 = model("WordLen7", require("../model/Word.js"));
const WordLen8 = model("WordLen8", require("../model/Word.js"));
const WordLen9 = model("WordLen9", require("../model/Word.js"));
const WordLen10 = model("WordLen10", require("../model/Word.js"));

router.get("/:id", (req, res) => {
  const len = Number(req.params.id);
  switch (len) {
    case 4:
      WordLen4.findOneRandom(function (err, result) {
        if (!err) {
          res.json(result);
          console.log(result);
        }
      });
      break;
    case 5:
      WordLen5.findOneRandom(function (err, result) {
        if (!err) {
          res.json(result);
          console.log(result);
        }
      });
      break;
    case 6:
      WordLen6.findOneRandom(function (err, result) {
        if (!err) {
          res.json(result);
          console.log(result);
        }
      });
      break;
    case 7:
      WordLen7.findOneRandom(function (err, result) {
        if (!err) {
          res.json(result);
          console.log(result);
        }
      });
      break;
    case 8:
      WordLen8.findOneRandom(function (err, result) {
        if (!err) {
          res.json(result);
          console.log(result);
        }
      });
      break;
    case 9:
      WordLen9.findOneRandom(function (err, result) {
        if (!err) {
          res.json(result);
          console.log(result);
        }
      });
      break;
    case 10:
      WordLen10.findOneRandom(function (err, result) {
        if (!err) {
          res.json(result);
          console.log(result);
        }
      });
      break;
  }
});
module.exports = router;
