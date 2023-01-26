const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const db = require('../models');
const Product = db.Product;
//<--Get Products-->
const getAllProduct = (async(userBody) => {

    const product = [{
        "id": 13,
        "name": "Refresh Mango",
        "name_ur": "Refresh Apple",
        "subcatId": 57,
        "status": false,
        "imageUrl": ["https://firebasestorage.googleapis.com/v0/b/cloudimage-6e701.appspot.com/o/1658505671130-Beverages.png?alt=media&token=07ac38eb-6f4c-4b31-9af9-9c0c7fff3ae7","https://pictures.grocerapps.com/lgthumb/grocerapp-daal-chana-615fed1953005.jpeg","https://firebasestorage.googleapis.com/v0/b/cloudimage-6e701.appspot.com/o/1658505671130-Beverages.png?alt=media&token=07ac38eb-6f4c-4b31-9af9-9c0c7fff3ae7"],
        "description": "2000ml Mango Fruit Drink",
        "price": 110,
        "sku": "2 Litre",
        "unit": "2 Liter",
        "quantity": 0
    }]

    return product;
    // //this line of code is getting the names come in query string
    // let namesOfObjects = Object.keys(userBody.query);
    // if (namesOfObjects.length == 0) {
    //     //from this condition we will get the list of the product
    //     const getAllProduct = await Product.findAll();
    //     return getAllProduct;
    // } else if (namesOfObjects.length == 2) {
    //     //in else we will find data that come in Query String
    //     const userbody = userBody.query;
    //     const getProductQueryString = await sequelize.query(`SELECT * FROM product WHERE ${namesOfObjects[1]}='${userbody[namesOfObjects[1]]}' && ${namesOfObjects[0]}='${userbody[namesOfObjects[0]]}'`, { type: Sequelize.QueryTypes.SELECT });
    //     console.log(getProductQueryString);
    //     return getProductQueryString;
    // } else if (namesOfObjects.length == 1) {

    //     const getProductQueryString = await sequelize.query(`SELECT * FROM product WHERE ${namesOfObjects[0]}='${userBody.query[namesOfObjects[0]]}'`, { type: Sequelize.QueryTypes.SELECT });
    //     console.log(getProductQueryString);
    //     return getProductQueryString;
    // };
});

//create list of products 
const postProducts = async(userBody) => {
    console.log(userBody.body)
    userBody = userBody.body;
    const postProducts = await Product.create(userBody)
        .then((resolve) => {
            console.log("Users data have been saved")
            return resolve;
        }).catch((error) => {
            console.log(error);
            return error;
        });
    return postProducts;
};
//Find product by id that come in url 
const getProductbyId = (async(userBody) => {
    const getProductbyId = await Product.findOne({
        where: {
            id: userBody.params.id
        }
    });
    return getProductbyId;
});
//Delete products by id that come in url
const deleteProductbyId = async(userBody) => {
    const productDelete = await Product.destroy({
        where: {
            id: userBody.params.id
        }
    });
    console.log(productDelete);
    return productDelete;
};

// Delete the List of products one by one
const deleteProducts = (async(userBody) => {
    let deleteProducts;
    for (let i = 0; i < userBody.length; i++) {
        let findIdofProduct = await Product.findOne({
            where: {
                productName: userBody[i].productName
            }
        });
        deleteProducts = await Product.destroy({
            where: {
                id: findIdofProduct.id
            }
        });
    }
    return deleteProducts;
});



//list of products to update
const updateProducts = (async(userBody) => {
    for (item of userBody) {
        const updated = await Product.update(item, { where: { id: item.id } })
        console.log(updated);
    }
});

module.exports = {
    getAllProduct,
    getProductbyId,
    deleteProductbyId,
    postProducts,
    deleteProducts,
    updateProducts
};