const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const pg = require("pg");

//
const connectStr = "postgres://webuser:123abc@localhost/recipebook";
app = express();
// Set view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
// Set public folder
app.use(express.static(path.join(__dirname, "public")));

// Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

module.exports = app;
