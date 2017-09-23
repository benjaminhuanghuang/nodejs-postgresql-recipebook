const express = require("express");
//
const app = require("./app");

const PORT = process.env.PORT || 8010; // for heroku deployment
app.listen(PORT, () => {
  console.log("Running on port 8010");
});