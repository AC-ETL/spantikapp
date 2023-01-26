const db = require("../models");
const Cart = db.Cart;
const subCatProducts = db.SubcatProducts;

const getCartProducts = async (userBody) => {
  const getCartProducts = await Cart.findAll({
    include: {
      model: subCatProducts,
    },
  });
  return getCartProducts;
};

const getCartProductbyId = async (userBody) => {
  const getCartProducts = await Cart.findAll({
    include: {
      model: subCatProducts,
    },
    where: {
      userId: userBody.params.id,
    },
  });
  return getCartProducts;
};


const postCart = async (userBody) => {
  const postCart = await Cart.create({
    subCatId: userBody.subcatId,
    userId: userBody.user_id,
    productId: userBody.id,
    item_total: userBody.item_total,
    quantity: userBody.quantity,
  });
  return postCart;
};

const deleteCartProduct = async (userBody) => {
  const deleteCartProducts = await Cart.destroy({
    where: {
      id: userBody.params.id,
    },
  });
  return deleteCartProducts;
};

const updateCartbyId = async (userBody) => {
  let updated = await Cart.update(userBody.body, {
    where: { id: userBody.params.id },
  });
  console.log(updated);
  return updated;
};

module.exports = {
  getCartProducts,
  postCart,
  deleteCartProduct,
  updateCartbyId,
  getCartProductbyId,
  
};
