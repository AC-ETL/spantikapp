const cartService = require("../services/cart.service");

//this function will return all the cart products
const getCartProducts = async (req, res) => {
  await cartService
    .getCartProducts(req)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

//this function will return one of the cart product that come in the id
const getCartProductbyId = async (req, res) => {
  await cartService
    .getCartProductbyId(req)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

//this function will return all the cart products
const postCart = async (req, res) => {
  await cartService
    .postCart(req.body)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

//this function will delete item by id
const deleteCart = async (req, res) => {
  await cartService
    .deleteCartProduct(req)
    .then((data) => {
      if (data === 1) {
        res.status(200).json("Successfully deleted");
      } else {
        res.send("not found");
      }
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

//this function will update item by id
const updateCartbyId = async (req, res) => {
  await cartService
    .updateCartbyId(req)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

module.exports = {
  getCartProducts,
  postCart,
  deleteCart,
  updateCartbyId,
  getCartProductbyId,
};
