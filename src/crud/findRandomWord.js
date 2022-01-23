require("../database.js");
const WordLen4 = require("../model/Word.js");

const findRandomWord = async () => {
  await WordLen4.findOneRandom(function (err, result) {
    if (!err) {
      console.log(result);
      // return result;
    }
  });
};
findRandomWord();
// const main = async () => {
//   const data = await findRandomWord();
//   await console.log(data);
// };
// main();
