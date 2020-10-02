const express = require("express");
const cors = require("cors");
require("./db/mongo.connection");
const classes = require("./routes/classes.routes.mongo");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/subjects", classes);

module.exports = app;
