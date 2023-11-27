const express = require("express");
const app = express(); //contiene la ejecucion de express
const path = require("path");
const PORT = 3000;
const mainRoutes = require("./routers/main.routes");

app.use(express.static(path.join(__dirname, "public")));

app.use("/", mainRoutes);

app.listen(PORT, () =>
  console.log("Server running in http://localhost:" + PORT)
);
