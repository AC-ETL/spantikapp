const express = require('express');
const subCategoryController = require('../controllers/subCategory.controller');
const uplodFile = require('../middlewares/upload.middlewares')

const router = express.Router();

router
    .route('/')
    .get(subCategoryController.getSubCategory)
    .post(subCategoryController.postSubCategory)
    .delete(subCategoryController.deleteSubCategory)


router
    .route('/:id')
    .get(subCategoryController.getSubCategorybyId)
    .delete(subCategoryController.deleteSubCategorybyId)
    .put(subCategoryController.updateSubCategorybyId)

module.exports = router;