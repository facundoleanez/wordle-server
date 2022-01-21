const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    word: "house",
    id: id,
  });
  console.log(typeof id);
});

module.exports = router;
