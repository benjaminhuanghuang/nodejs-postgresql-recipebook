const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cons = require("consolidate");
const dust = require("dustjs-helpers");
const pg = require("pg");

//
const connectStr = "postgres://webuser:123abc@localhost/recipebook";
app = express();
// Assign Dust Engine to .dust files
app.engine("dust", cons.dust);
// Set default ext .dust
app.set("view engine", "dust");
app.set("views", __dirname + "/views");
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
