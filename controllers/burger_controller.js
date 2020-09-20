// dependencies
const express = require("express");
const burger = require("../models/burger.js");

// create router
const router = express.Router();

// crud routes
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    const hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  })
})

router.post("/api/burgers", function (req, res) {
  burger.insertOne("burger_name", req.body.burger_name, function (result) {
    res.json(result);
  })
})

router.put("/api/burgers/:id", function (req, res) {
  burger.updateOne("devoured", req.body.devoured, "id", req.params.id, function (result) {
    if (result.changedRows === 0) {
      console.log(result);
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
})

router.delete("/api/burgers/:id", function (req, res) {
  burger.deleteOne("id", req.params.id, function (result) {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
})

// export router
module.exports = router;