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

router.post("/add", (req, res, next) => {
  console.log("POST...");
  db.query("INSERT INTO recipes(name, ingredients, directions) VALUES($1, $2, $3)", 
    [req.body.name, req.body.ingredients, req.body.directions], (err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

router.post("/edit", (req, res, next) => {
  console.log("POST...");
  db.query("UPDATE recipes set name=$1, ingredients=$2, directions=$3 WHERE id=$4", 
    [req.body.name, req.body.ingredients, req.body.directions, req.body.id], (err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
