const express = require("express");
const app = express();
const cors = require("cors");
const spriteRouter = require("./spriteRouter");

app.use(cors());
app.use(express.static("build"));
app.use(express.json());

app.use("/", spriteRouter);

module.exports = app;
