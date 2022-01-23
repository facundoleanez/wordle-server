require("../database.js");
const User = require("../model/User.js");

module.exports = async (username, password) => {
  const user = new User({
    userName: username,
    password: password,
  });

  const userSaved = await user.save();
  console.log(userSaved);
};

// newUser("marce", "1234");
