const subCategoryService = require('../services/subCategory.service');

//get all the subCategories 
const getSubCategory = async(req, res) => {
    await subCategoryService.getAllSubCategories(req)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
};

//get single subCategory prodcuts
const getSubCategorybyId = async(req, res) => {
    await subCategoryService.getSubCategoriesbyId(req)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
};



//post the subcategory name etc
const postSubCategory = async(req, res) => {
    await subCategoryService.postSubCategory(req)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
};

//delete sub category list 
const deleteSubCategory = async(req, res) => {
    await subCategoryService.deleteSubCategory(req.body)
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

//delete sub category by id
const deleteSubCategorybyId = async(req, res) => {
    await subCategoryService.deleteSubCategorybyId(req)
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

//update sub category by id 
const updateSubCategorybyId = async(req, res) => {
    // console.log(req.params.id)

    await subCategoryService.updateSubCategorybyId(req)
        .then((data) => {
            if (data === 1) {
                res.json({
                    status : 200
                });
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
    getSubCategory,
    getSubCategorybyId,
    postSubCategory,
    deleteSubCategory,
    deleteSubCategorybyId,
    updateSubCategorybyId
};