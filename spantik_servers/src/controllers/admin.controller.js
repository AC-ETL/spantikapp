const categoryService = require("../services/category.service");
const subCategoryService = require("../services/subCategory.service");

const db = require("../models");
const { Orders } = require("../models");
const Category = db.Category;
const Subcategory = db.Subcategory;
const SubcatProducts = db.SubcatProducts;
const Order = db.Orders;
const OrderDetails = db.OrderDetails;
const Product = db.SubcatProducts;
const User = db.User;
const Cart=db.Cart

//########-------- For Add---------########
//Singin page will render here
const signinPage = async (req, res) => {
  res.render("admin/signin");
};

// view admin home page
const getAdmin = async (req, res) => {
  res.render("admin/index");
  // res.render("register");
};

// view  Cateogry form
const viewCategory = async (req, res) => {
  res.render("admin/category");
};

// admin side view product
const getSubCategory = async (req, res) => {
  console.log("here file will render");
  const allCat = await categoryService.getAllCategories();
  res.render("admin/subCategory", { allCat });
  // res.render("register");
};

const getUsers = async (req, res) => {
  const getUser = await User.findAll();
  res.render("admin/user_view", { getUser });
};

// admin side view product
const getProduct = async (req, res) => {
  console.log("here file will render");
  const allSubCat = await Subcategory.findAll();
  console.log(allSubCat);
  // res.send(allSubCat)
  res.render("admin/product", { allSubCat });
};

// admin side view product
const updateOrder = async (req, res) => {
  console.log("here file will render");
  const orderDeatailObj = await OrderDetails.findByPk(req.params.id);
  res.render("admin/order_edit", { orderDeatailObj });
};

//########-------- For view---------########

// view table all category
const viewAllCategory = async (req, res) => {
  const allCategory = await categoryService.getAllCategories();
  res.render("admin/category_view", { allCategory });
};

// view table all category
const viewAllSubCategory = async (req, res) => {
  const allSubCategory = await Subcategory.findAll({
    include: {
      model: Category,
    },
  });
  // res.send(allSubCategory)
  res.render("admin/subCategory_view", { allSubCategory });
};

// view table all Products
const viewAllProducts = async (req, res) => {
  const allProducts = await SubcatProducts.findAll({
    include: [
      {
        model: Subcategory,
      },
    ],
  });
  // res.send(allProducts)
  res.render("admin/product_view", { allProducts });
};

const viewOrder = async (req, res) => {
  const viewAllOrders = await OrderDetails.findAll({
    include: [
      {
        model: Order,
        include: {
          model: User,
        },
      },
      {
        model: Product,
        include: [
          {
            model: Subcategory,
          },
        ],
      },
    ],
  });

  // console.log(viewAllOrders[0].order.register);
    // console.log(viewAllOrders[0].product);
  // res.send(viewAllOrders)
  // res.render("admin/order_view copy", { viewAllOrders });
  // res.render("admin/order_view copy", { viewAllOrders });
  res.render("admin/order_view_old", { viewAllOrders });
};
///##################invoice//////////////////////////
const singleOrederInvoice = async (req, res) => {
  const viewSingleOrder = await OrderDetails.findAll({  
    where: {
      orderId: req.params.id
    },
    include: [
      {
        model: Order,
        include: {
          model: User,
        },
      },
      {
        model: Product,
        include: [
          {
            model: Subcategory,
          },
        ],
      },
    ],
  });
  // console.log("????????????????>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<",JSON.stringify(viewSingleOrder))
  res.render("admin/app-invoice",{viewSingleOrder});
};

//########-------- For Single view---------########

// cateogry single view
const singleCategory = async (req, res) => {
  const singleCat = await Category.findByPk(req.params.id);
  res.render("admin/category_single_view", { singleCat });
};

// subcategory signle page view
const singleSubCategory = async (req, res) => {
  const singleSubCat = await Subcategory.findByPk(req.params.id, {
    include: [
      {
        model: Category,
      },
    ],
  });
  // res.send(singleSubCat)
  res.render("admin/subCategory_single_view", { singleSubCat });
};

// subcategory signle page view
const singleProduct = async (req, res) => {
  const singlePro = await Product.findByPk(req.params.id, {
    include: [
      {
        model: Subcategory,
      },
    ],
  });
  // res.send(singlePro)
  res.render("admin/product_single_view", { singlePro });
};

//########-------- For Update---------########

// update category form view
const UpdateCateogry = async (req, res) => {
  const singleCat = await Category.findByPk(req.params.id);
  res.render("admin/category_update", { singleCat });
};

// update sub category form view
const UpdateSubCateogry = async (req, res) => {
  const allCat = await categoryService.getAllCategories();
  console.log(req.params.id);
  const singleSubCat = await Subcategory.findByPk(req.params.id);
  // res.send(singleSubCat)
  res.render("admin/subCategory_update", { allCat, singleSubCat });
};

//order Update
const updateOrderForUser = async (req, res) => {
  const ReqQuantity = req.body.quantity;
  //fetching ordersDetials Quantity
  const OrderDetailFetch = await OrderDetails.findOne({
    where: { id: req.params.id },
  });

  //fetching orders Quantity
  const orderTotalPrice = await Orders.findOne({
    where: {
      id: OrderDetailFetch.orderId,
    },
  });

  const OrderDetailQTY = OrderDetailFetch.quantity;
  const OrderetailPrice = OrderDetailFetch.price;

  //check exsiting quantity is greater than new quantity
  let sum = orderTotalPrice.totalPrice - OrderDetailQTY * OrderetailPrice;
  sum += ReqQuantity * OrderetailPrice;
  const orderDetailQuantityUpdate = await OrderDetails.update(
    { quantity: ReqQuantity },
    {
      where: {
        id: OrderDetailFetch.id,
      },
    }
  );
  const orderTotalPriceUpdate = await Order.update(
    { totalPrice: sum },
    {
      where: {
        id: OrderDetailFetch.orderId,
      },
    }
  );
  res.json({ orderDetailQuantityUpdate, orderTotalPriceUpdate });
};

// update sub category form view
const UpdateProduct = async (req, res) => {
  const allSubCat = await subCategoryService.getAllSubCategories();
  const singlePro = await Product.findByPk(req.params.id, {
    include: [
      {
        model: Subcategory,
      },
    ],
  });

  res.render("admin/product_update", { allSubCat, singlePro });
};

const logoutUser = (req, res) => {
  const logoutUser = res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/admin");
};
//// delete user in admin side
const deleteUser = async(userBody,res) => {
  console.log("woling",userBody.params.id)

  const findRow = await Cart.destroy({
      where: {
          userid: userBody.params.id
      }
  });
  const find = await User.destroy({
      where: {
          id: userBody.params.id
      }
  });
 res.redirect("/admin/users")
};


module.exports = {
  signinPage,
  getAdmin,
  viewCategory,
  getProduct,
  getSubCategory,
  getUsers,
  viewAllCategory,
  viewAllSubCategory,
  viewAllProducts,
  singleCategory,
  singleSubCategory,
  singleProduct,
  UpdateCateogry,
  UpdateSubCateogry,
  UpdateProduct,
  viewOrder,
  logoutUser,
  updateOrder,
  updateOrderForUser,
  deleteUser,
  singleOrederInvoice
};
