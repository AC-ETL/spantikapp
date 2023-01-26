const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const db = {};
db.SubcatProducts = require('./catproducts.model')(sequelize,Sequelize);
db.Product = require('./product.model')(sequelize,Sequelize);
db.User = require('./user.model')(sequelize,Sequelize);
db.Category = require('./category.model')(sequelize,Sequelize);
db.Subcategory = require('./subCategory.model')(sequelize,Sequelize);
db.Cart = require('./cart.model')(sequelize,Sequelize);
db.Orders = require('./orders.model')(sequelize,Sequelize);
db.OrderDetails = require('./orderdetails.model')(sequelize,Sequelize);


//category association with subcategory
db.Category.hasMany(db.Subcategory, { foreignKey : 'catId' });
db.Subcategory.belongsTo(db.Category, { foreignKey : 'catId' });

//subcategory association with SubcatProducts
db.Subcategory.hasMany(db.SubcatProducts, { foreignKey : 'subcatId' });
db.SubcatProducts.belongsTo(db.Subcategory, { foreignKey : 'subcatId' });

// //user association with orders
db.User.hasMany(db.Orders, { foreignKey: 'userId' });
db.Orders.belongsTo(db.User, { foreignKey: 'userId' });

//orders association with order details 
db.Orders.hasMany(db.OrderDetails, { foreignKey : 'orderId' });
db.OrderDetails.belongsTo(db.Orders, { foreignKey : 'orderId' });

// Products association with order details
db.SubcatProducts.hasMany(db.OrderDetails,{foreignKey : 'productId'});
db.OrderDetails.belongsTo(db.SubcatProducts,{foreignKey : 'productId'});

//Cart association with Products
db.SubcatProducts.hasMany(db.Cart,{foreignKey : 'productId'});
db.Cart.belongsTo(db.SubcatProducts,{foreignKey : 'productId'});

module.exports = db;