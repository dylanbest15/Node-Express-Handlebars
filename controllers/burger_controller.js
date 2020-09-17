// dependencies
const express = require("express");
const burger = require("../models/burger.js");

// create router
const router = express.Router();

// crud routes
router.get("/", function (req, res) {

})

router.post("/api/burgers", function (req, res) {

})

router.put("/api/burgers/:id", function (req, res) {

})

router.delete("/api/burgers/:id", function (req, res) {

})

// export router
module.exports = router;