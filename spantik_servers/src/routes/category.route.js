const express = require('express');
const categoryController = require('../controllers/category.controller');
const uplodFile = require('../middlewares/upload.middlewares')


const router = express.Router();

router
    .route('/')
    .get(categoryController.getProducts)
    .post(categoryController.postCategory)
    .delete(categoryController.deleteCategory)


router
    .route('/:id')
    .delete(categoryController.deleteCategorybyId)
    .put(categoryController.updateCategorybyId)

module.exports = router;