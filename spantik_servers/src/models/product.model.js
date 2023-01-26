module.exports = (sequelize, Sequelize) => {

    const Product = sequelize.define('product', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        productName: {
            type: Sequelize.STRING
        },
        category: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.FLOAT
        },
        isAvailable: {
            type: Sequelize.BOOLEAN
        },
        sku: {
            type: Sequelize.STRING
        }

    });
    return Product;
}