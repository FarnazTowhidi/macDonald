const foodCtrl = require("../controllers/foods");
var router = require("express").Router();
const passport = require("passport");


router.get("/", foodCtrl.index);
router.get("/:id", foodCtrl.show);

module.exports = router;