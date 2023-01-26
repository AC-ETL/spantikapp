const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const db = {};
db.SubcatProducts = require('../models/catproducts.model')(sequelize,Sequelize)
db.Product = require('../models/product.model')(sequelize,Sequelize)
db.User = require('../models/user.model')(sequelize,Sequelize)
db.Category = require('../models/category.model')(sequelize,Sequelize)
db.Subcategory = require('../models/subCategory.model')(sequelize,Sequelize)


//category association with subcategory
db.Category.hasMany(db.Subcategory, { foreignKey: 'catId' });
db.Subcategory.belongsTo(db.Category);

//subcategory association with SubcatProducts
db.Subcategory.hasMany(db.SubcatProducts, { foreignKey: 'subcatId' });
db.SubcatProducts.belongsTo(db.Subcategory, { foreignKey: 'subcatId' });

module.exports= db