const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

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
const routes = require('./routes');
app.use('/', routes);

module.exports = app;
