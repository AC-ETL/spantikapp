module.exports = (sequelize, Sequelize) => {

    const OrderDetails = sequelize.define('orderdetails', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        subCatId: {
            type: Sequelize.INTEGER
        },
        price: {
            type: Sequelize.FLOAT
        },
        productId: {
            type: Sequelize.INTEGER
        },
        quantity: {
            type: Sequelize.INTEGER
        },
        orderId: {
            type: Sequelize.INTEGER
        }
    });
    return OrderDetails;
}