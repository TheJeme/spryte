const express = require("express");
const app = express();
const spriteRouter = require("./spriteRouter");

app.use(express.static("build"));
app.use(express.json());

app.use("/", spriteRouter);

module.exports = app;
