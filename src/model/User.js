const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  userName: { type: String, unique: true, required: true },
  password: String,
});

module.exports = model("User", userSchema);
