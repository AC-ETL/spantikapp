const categoryService = require('../services/category.service');

//get all the categories 
const getProducts = async (req, res) => {
    await categoryService.getAllCategories(req)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
};

//post the category name etc
const postCategory = async (req, res) => {
    // console.log(req.file.filename)


    await categoryService.postCategory(req)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
};

//delete category list 
const deleteCategory = async (req, res) => {
    await categoryService.deleteCategory(req.body)
        .then((data) => {
            if (data === 1) {
                res.status(200).json('Successfully deleted');
            } else {
                res.send("not found");
            }
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
};

//delete category list 
const deleteCategorybyId = async (req, res) => {
    await categoryService.deleteCategorybyId(req)
        .then((data) => {
            if (data === 1) {
                res.status(200).json('Successfully deleted');
            } else {
                res.send("not found");
            }
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
};

//update category list 
const updateCategorybyId = async (req, res) => {
    console.log("i am at category Controller", req.body);
    await categoryService.updateCategorybyId(req)
        .then((data) => {
            if (data === 1) {
                res.send("Record updated");
            } else {
                res.send("error occured!");
            }
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
};

module.exports = {
    getProducts,
    postCategory,
    deleteCategory,
    deleteCategorybyId,
    updateCategorybyId
};