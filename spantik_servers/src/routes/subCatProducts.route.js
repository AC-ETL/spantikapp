const express = require('express');
const subCatProductsController = require('../controllers/subCatProducts.controller');
const uplodFile = require('../middlewares/upload.middlewares')

const router = express.Router();

router
    .route('/')
    .get(subCatProductsController.getSubCatProducts)
    .post(subCatProductsController.postSubCatProdcuts)
    .delete(subCatProductsController.deleteSubCatProdcuts)


router
    .route('/:id')
    .get(subCatProductsController.getSubCatProductbyId)
    .delete(subCatProductsController.deleteSubCatProdcutbyId)
    .put(subCatProductsController.updateSubCatProdcutsbyId)

module.exports = router;