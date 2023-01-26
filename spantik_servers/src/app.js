const express = require("express");
const routes = require("./routes");
const db = require("./models");

// require ejs
const ejs = require("ejs");

//cookie- parser require
const cookieParser = require("cookie-parser");

const app = express();

const cors = require("cors");

//express setup
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//set ejs view engine
app.set("view engine", "ejs");
//making a static folder for CSS
app.use(express.static("public"));

app.use("/", routes);


module.exports = app;
