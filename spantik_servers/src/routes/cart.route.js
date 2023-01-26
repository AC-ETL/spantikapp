const express = require("express");
const cartController = require("../controllers/cart.controller");

const router = express.Router();

router
  .route("/")
  .get(cartController.getCartProducts)
  .post(cartController.postCart);

router
  .route("/:id")
  .get(cartController.getCartProductbyId)
  .delete(cartController.deleteCart)
  .put(cartController.updateCartbyId);


module.exports = router;
