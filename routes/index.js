const express = require("express");
const router = express.Router();
//
const db = require("../db");

router.get("/", (req, res, next) => {
  db.query("SELECT * FROM recipes", [], (err, data) => {
    if (err) {
      return next(err);
    }
    res.render("index", { recipes: data.rows });
  });
});

module.exports = router;
