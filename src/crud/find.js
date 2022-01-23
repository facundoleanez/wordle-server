require("../database.js");
const WordLen4 = require("../model/Word.js");

async function getWord(word) {
  const words = await WordLen4.find({ word: word });
  console.log(words);
}

getWord("take");
