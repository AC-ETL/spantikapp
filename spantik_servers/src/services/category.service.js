const db = require('../models');
const Category = db.Category;
const SubCategory = db.Subcategory;
const SubcatProducts = db.SubcatProducts;

//Get all the categoires 
const getAllCategories = async() => {
    const getAllProduct = await Category.findAll({
        include: {
            model: SubCategory,
            include: [
                SubcatProducts
            ]
        }
    });
    return getAllProduct;
};

//Post all the categories
const postCategory = async(userBody) => {
    console.log(userBody);
    const postCategory = await Category.create({
        name: userBody.body.name,
        description: userBody.body.description,
        imageUrl: userBody.body.imageUrl,
        status: userBody.body.status
    });
    return postCategory;
};

//delete list of categories by one by one
const deleteCategory = async(userBody, deleteCategory) => {

    for (let i = 0; i < userBody.length; i++) {
        let findIdofCategory = await Category.findOne({
            where: {
                name: userBody[i].name
            }
        });
        deleteCategory = await Category.destroy({
            where: {
                id: findIdofCategory.id
            }
        });
    }
    return deleteCategory;
};

//Delete category by id that come in url
const deleteCategorybyId = async(userBody) => {
    const productDelete = await Category.destroy({
        where: {
            id: userBody.params.id
        }
    });
    console.log(productDelete);
    return productDelete;
};

//update category by id
const updateCategorybyId = async(userBody) => {
    console.log(userBody.body.name)
    const cateogry = await Category.update({
        name: userBody.body.name,
        description: userBody.body.description,
        imageUrl: userBody.body.imageUrl,
        status: userBody.body.status

    }, { where: { id: userBody.params.id } })
    return cateogry;
    // let updated;
    // for (item of userBody.body) {
    //     updated = await Category.update(item, { where: { id: userBody.params.id } })
    //     console.log(updated);
    // }
    // return updated;
    // const categoryUpdate = await Category.update({name:userBody.body[0].name},{where:{id:userBody.params.id}});
    // return categoryUpdate;
};
module.exports = {
    getAllCategories,
    postCategory,
    deleteCategory,
    deleteCategorybyId,
    updateCategorybyId
}