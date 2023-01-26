const subCatProductsService = require('../services/subCatProducts.service');

//get all the subCategories products
const getSubCatProducts = async(req, res) => {
    await subCatProductsService.getAllSubCatProducts(req)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
};

//get the single subCategory product
const getSubCatProductbyId = async(req, res) => {
    await subCatProductsService.getProductbyId(req)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
};

//post the subcategory products etc
const postSubCatProdcuts = async(req, res) => {
    await subCatProductsService.postSubCatProducts(req)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
};

//delete sub category Products list 
const deleteSubCatProdcuts = async(req, res) => {
    await subCatProductsService.deleteSubCatProducts(req.body)
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

//delete sub category products by id
const deleteSubCatProdcutbyId = async(req, res) => {
    await subCatProductsService.deleteSubCatProductbyId(req)
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

//update sub category products list 
const updateSubCatProdcutsbyId = async(req, res) => {
    await subCatProductsService.updateSubCatProductbyId(req)
        .then((data) => {
            if (data === 0) {
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
    getSubCatProducts,
    postSubCatProdcuts,
    deleteSubCatProdcutbyId,
    deleteSubCatProdcuts,
    updateSubCatProdcutsbyId,
    getSubCatProductbyId
};