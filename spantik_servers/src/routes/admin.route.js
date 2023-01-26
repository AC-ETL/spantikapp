const express = require('express');
const adminController = require('../controllers/admin.controller');
const authRoute = require('../middlewares/userAuth');

const router = express.Router();

router
    .route('/')
    .get(adminController.signinPage)

router
    .route('/dashboard')
    .get(authRoute,adminController.getAdmin)
    //     .post(authController.postRegister)

router
    .route('/category')
    .get(authRoute,adminController.viewCategory)
    // .post(authController.postRegister)


router
    .route('/product')
    .get(authRoute,adminController.getProduct)


router
    .route('/sub-category')
    .get(authRoute,adminController.getSubCategory)

router
    .route('/users')
    .get(authRoute,adminController.getUsers)

router
    .route('/Order-update/:id')
    .get(authRoute,adminController.updateOrder)
 
//########-------- For view---------########

// shows all category
router
    .route('/all-category')
    .get(authRoute,adminController.viewAllCategory)

//shows all sub category
router
    .route('/all-Sub-Category')
    .get(authRoute,adminController.viewAllSubCategory)

//shows allProducts
router
    .route('/all-Products')
    .get(authRoute,adminController.viewAllProducts)

//shows all Order
router
    .route('/all-Order')
    .get(authRoute,adminController.viewOrder)


//########-------- For Single view---------########

//shows single cateogry
router
    .route('/view-Signle-Category/:id')
    .get(authRoute,adminController.singleCategory)

//shows single sub Cateogry
router
    .route('/view-Sub-Signle-Category/:id')
    .get(authRoute,adminController.singleSubCategory)

//shows single Product
router
    .route('/single-product/:id')
    .get(authRoute,adminController.singleProduct)

//########-------- For update---------########


//update single Category
router
    .route('/update-category/:id')
    .get(authRoute,adminController.UpdateCateogry)

//update single Sub Category
router
    .route('/update-sub-category/:id')
    .get(authRoute,adminController.UpdateSubCateogry)

//update single Sub Category
router
    .route('/update-product/:id')
    .get(authRoute,adminController.UpdateProduct)

router
    .route('/logout')
    .get(adminController.logoutUser);

router
    .route('/single-order-update/:id')
    .put(adminController.updateOrderForUser);
router
    .route('/single-order/:id')
    .get(adminController.singleOrederInvoice);
router
    .route('/del/:id')
    .get(adminController.deleteUser);


module.exports = router;