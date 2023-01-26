const express=require('express');
const productController= require('../controllers/product.controller');

const router=express.Router();

router
    .route('/')
    .get(productController.getProducts)
    .post(productController.postProducts)
    .delete(productController.deleteProducts)
    .put(productController.updateProductList)

router
    .route('/:id')
    .get(productController.getProduct)
    .delete(productController.deleteProductbyId)
    

module.exports=router;