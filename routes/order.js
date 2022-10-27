const ordersCtrl = require("../controllers/orders");
var router = require("express").Router();

router.get("/showOrder/:orderID", ordersCtrl.showOrder);
router.get("/checkout/", ordersCtrl.showAllOrders);
router.post("/Add/:id", ordersCtrl.addOrder);
router.post("/updateOrder/:orderID", ordersCtrl.update);
router.delete("/deleteOrder/:orderID", ordersCtrl.deleteOrder);

module.exports = router;
