import express from "express";
var routes = require("./routes/index");

const app = express();

app.use(express.static("public"));

app.use("/", routes);

export { app };
