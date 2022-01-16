const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

//settings
app.set("port", process.env.PORT || 3000);

//middlewares funciones que se ejecutan antes de llegar a las rutas
app.use(cors());
app.use(morgan("dev")); //muestra las peticiones y mensajes que manda el servidor
app.use(express.json()); //cada vez que se reciba o envie dato vamos a poder usarlos en la api

//routes
app.use(require("./routes/routes"));

app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
