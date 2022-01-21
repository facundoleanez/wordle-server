const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const XLSX = require("xlsx");

const connectionString =
  "mongodb+srv://wordmate:matedevfacuseba@cluster0.0zwhf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("database conectada bebe");
  })
  .catch((err) => {
    console.error(err);
  });

const wordSchema = new Schema({
  word: String,
  vote: Number,
});

const WordLen10 = model("WordLen10", wordSchema);

const workbook = XLSX.readFile("wordList.xlsx");
const workbookSheets = workbook.SheetNames;

const sheet = workbookSheets[7];

const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);

data.forEach((item) => {
  const word = new WordLen10({
    word: item.word,
    vote: 0,
  });
  word
    .save()
    .then((result) => {
      console.log(result.word);
    })
    .catch((err) => {
      console.error(err);
    });
});
// mongoose.connection.close();
