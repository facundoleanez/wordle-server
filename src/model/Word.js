require("../database.js");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const random = require("mongoose-simple-random");

const wordSchema = new Schema({
  word: String,
  vote: Number,
});
wordSchema.plugin(random);

module.exports = wordSchema;
