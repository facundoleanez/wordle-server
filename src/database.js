const mongoose = require("mongoose");

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
