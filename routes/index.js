var express = require("express");
var router = express.Router();
const IndCtrl = require("../controllers/index");

router.get("/", IndCtrl.index);
module.exports = router;
