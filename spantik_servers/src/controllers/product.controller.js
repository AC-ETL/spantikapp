const productService = require('../services/product.service')

//get all products using request body (id param)
const getProducts = async(req, res) => {

    await productService.getAllProduct(req)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
};

//post list of products
const postProducts = async(req, res) => {


    await productService.postProducts(req)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        });
};

//get product by id 
const getProduct = async(req, res) => {
    await productService.getProductbyId(req)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
};

//delete product by id
const deleteProductbyId = async(req, res) => {
    await productService.deleteProductbyId(req)
        .then((data) => {
            if (data === 0) {
                data = 200;
                res.send(data);
            }
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
};

//delete list of products
const deleteProducts = async(req, res) => {
    await productService.deleteProducts(req.body)
        .then((data) => {
            if (data === 0) {
                data = 200;
                res.send(data);
            } else {
                res.send("not found");
            }
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
};

//update list of products 
const updateProductList = async(req, res) => {
    await productService.updateProducts(req.body)
        .then((data) => {
            res.status(200).json({
                massege: "Row updated",
                Product: data
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

module.exports = {
    getProducts,
    getProduct,
    deleteProductbyId,
    postProducts,
    deleteProducts,
    updateProductList
};