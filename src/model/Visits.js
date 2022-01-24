// require("../database.js");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const visitSchema = new Schema({
  counter: Number,
});

const Visit = model("Visit", visitSchema);

function getVisitAndUpdate() {
  Visit.find((err, res) => {
    Visit.findOneAndUpdate(
      { counter: res[0].counter },
      { counter: res[0].counter + 1 },
      (error, response) => {
        console.log(response);
      }
    );
  });
}

module.exports = getVisitAndUpdate;
