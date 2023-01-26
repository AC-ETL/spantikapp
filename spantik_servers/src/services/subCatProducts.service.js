const db = require('../models');
const SubcatProducts = db.SubcatProducts;
const SubCategory = db.Subcategory;
const Sequelize = require('sequelize');
const sequelize = require('../config/db');



//<--Get Products-->
const getAllSubCatProducts = (async(userBody) => {
    //this line of code is getting the names come in query string
    let namesOfObjects = Object.keys(userBody.query);
    if (namesOfObjects.length == 0) {
        //from this condition we will get the list of the product
        const getAllProduct = await SubcatProducts.findAll();
        return getAllProduct;
    } else if (namesOfObjects.length == 2) {
        //in else we will find data that come in Query String
        const userbody = userBody.query;
        const getProductQueryString = await sequelize.query(`SELECT * FROM products WHERE ${namesOfObjects[1]}='${userbody[namesOfObjects[1]]}' && ${namesOfObjects[0]}='${userbody[namesOfObjects[0]]}'`, { type: Sequelize.QueryTypes.SELECT });
        console.log(getProductQueryString);
        return getProductQueryString;
    } else if (namesOfObjects.length == 1) {

        const getProductQueryString = await sequelize.query(`SELECT * FROM products WHERE ${namesOfObjects[0]}='${userBody.query[namesOfObjects[0]]}'`, { type: Sequelize.QueryTypes.SELECT });
        console.log(getProductQueryString);
        return getProductQueryString;
    };
});

//Post all the Sub categories products
const postSubCatProducts = async(userBody) => {
    const postProducts = await SubcatProducts.create({
            name: userBody.body.name,
            name_ur: userBody.body.name_ur,
            imageUrl: userBody.body.imageUrl,
            subcatId: userBody.body.subcatId,
            status: userBody.body.status,
            description: userBody.body.description,
            sku: userBody.body.sku,
            price: userBody.body.price,
            unit: userBody.body.unit,
            quantity: userBody.body.quantity,
        })
        .then((resolve) => {
            console.log("Users data have been saved");
            return resolve;
        }).catch((error) => {
            console.log(error);
            return error;
        });
    return postProducts;
};

//Find product by id that come in url 
const getProductbyId = (async(userBody) => {
    const getProductbyId = await SubcatProducts.findOne({
        where: {
            id: userBody.params.id
        }
    });
    return getProductbyId;
});

//delete list of sub categories products by one by one
const deleteSubCatProducts = async(userBody, deleteCategory) => {

    for (let i = 0; i < userBody.length; i++) {
        let findIdofCategory = await SubcatProducts.findOne({
            where: {
                name: userBody[i].name
            }
        });
        deleteCategory = await SubcatProducts.destroy({
            where: {
                id: findIdofCategory.id
            }
        });
    }
    return deleteCategory;
};

//Delete sub category product by id that come in url
const deleteSubCatProductbyId = async(userBody) => {
    const productDelete = await SubcatProducts.destroy({
        where: {
            id: userBody.params.id
        }
    });
    console.log(productDelete);
    return productDelete;
};

//update sub category product by id
const updateSubCatProductbyId = async(userBody) => {
    console.log("=======>" + userBody.params.id)
    const updatepro = await SubcatProducts.update({
        name: userBody.body.name,
        name_ur: userBody.body.name_ur,
        imageUrl: userBody.body.imageUrl,
        subcatId: userBody.body.subcatId,
        status: userBody.body.status,
        description: userBody.body.description,
        sku: userBody.body.sku,
        price: userBody.body.price,
        unit: userBody.body.unit,
        quantity: userBody.body.quantity,
    }, { where: { id: userBody.params.id } })
    return updatepro
        // let updated;
        // for (item of userBody.body) {
        //     updated = await SubcatProducts.update(item, { where: { id: userBody.params.id } })
        //     console.log(updated);
        // }
        // return updated;
        // const categoryUpdate = await SubcatProducts.update({name:userBody.body[0].name},{where:{id:userBody.params.id}});
        // return categoryUpdate;
};

module.exports = {
    getAllSubCatProducts,
    postSubCatProducts,
    deleteSubCatProductbyId,
    deleteSubCatProducts,
    updateSubCatProductbyId,
    getProductbyId
};