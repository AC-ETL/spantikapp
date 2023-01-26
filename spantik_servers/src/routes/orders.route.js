const express=require('express');
const ordersController= require('../controllers/orders.controller');


const router=express.Router();

router
    .route('/')
    .get(ordersController.getOrdersProducts)
    .post(ordersController.postOrder)

router
    .route('/:id')
    .get(ordersController.getOrdersbyId)
    .delete(ordersController.deleteOrderbyId)
    .put(ordersController.updateOrderbyId)

module.exports=router;