var express = require("express");
var router = express.Router();
const ordersCtrl = require("../controllers/orders");

router.get("/", ordersCtrl.index);
router.get("/:id", ordersCtrl.show);
router.get("/showOrder/:orderID", ordersCtrl.showOrder);
router.post("/Add/:id", ordersCtrl.addOrder);

module.exports = router;
