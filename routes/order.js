const ordersCtrl = require("../controllers/orders");
var router = require("express").Router();
const passport = require("passport");


// router.get("/", ordersCtrl.index);
// router.get("/:id", ordersCtrl.show);
router.get("/showOrder/:orderID", ordersCtrl.showOrder);
router.post("/Add/:id", ordersCtrl.addOrder);

module.exports = router;
