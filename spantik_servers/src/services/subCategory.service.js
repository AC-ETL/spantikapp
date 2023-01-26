const db = require('../models');
const SubCategory = db.Subcategory;
const SubcatProducts = db.SubcatProducts;
const Category = db.Category;

//get all the sub category 
const getAllSubCategories = async(userBody) => {

    const getAllSubCategories = await SubCategory.findAll({
        include:[
            {
                model: SubcatProducts,
                // where:{
                //     id: userBody.params.id
                // }
            }
        ]
    });
    return getAllSubCategories;
};

//get all the sub category 
const getSubCategoriesbyId = async(userBody) => {

    const getAllSubCategories = await SubCategory.findAll({
        where:{
            id : userBody.params.id,
        },
        include:{
            model : SubcatProducts
        }
    });
    return getAllSubCategories;
};

//Post all the Sub categories
const postSubCategory = async(userBody) => {
    const postCategory = await SubCategory.create({
        name: userBody.body.name,
        catId: userBody.body.catId,
        name_ur: userBody.body.name_ur,
    
        imageUrl: userBody.body.imageUrl
    });
    return postCategory;
};

//delete list of sub categories by one by one
const deleteSubCategory = async(userBody, deleteCategory) => {

    for (let i = 0; i < userBody.length; i++) {
        let findIdofCategory = await SubCategory.findOne({
            where: {
                name: userBody[i].name
            }
        });
        deleteCategory = await SubCategory.destroy({
            where: {
                id: findIdofCategory.id
            }
        });
    }
    return deleteCategory;
};

//Delete sub category by id that come in url
const deleteSubCategorybyId = async(userBody) => {
    const productDelete = await SubCategory.destroy({
        where: {
            id: userBody.params.id
        }
    });
    console.log(productDelete);
    return productDelete;
};

//update sub category by id
const updateSubCategorybyId = async(userBody) => {

    const subCategory = await SubCategory.update({
        name: userBody.body.name,
        catId: userBody.body.catId,
        name_ur: userBody.body.name_ur,
        status: userBody.body.status,
        imageUrl: userBody.body.imageUrl
    }, { where: { id: userBody.params.id } })
    return subCategory;
};

module.exports = {
    getAllSubCategories,
    getSubCategoriesbyId,
    postSubCategory,
    deleteSubCategory,
    deleteSubCategorybyId,
    updateSubCategorybyId
};