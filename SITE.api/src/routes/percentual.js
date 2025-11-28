var express = require("express");
var router = express.Router();
var percentualController = require("../controllers/percentualController");

router.get("/:email", function(req, res) {
    percentualController.kpiPercentual(req, res);
});

module.exports = router;
