module.exports = (sequelize, Sequelize) => {
    const SubcatProducts = sequelize.define('products', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        name_ur: {
            type: Sequelize.STRING
        },
        subcatId: {
            type: Sequelize.STRING,
        },
        status: {
            type: Sequelize.BOOLEAN
        },
        imageUrl: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.DOUBLE
        },

        sku: {
            type: Sequelize.STRING
        },

        unit: {
            type: Sequelize.STRING
        },
        quantity: {
            type: Sequelize.INTEGER
        },
    });
    return SubcatProducts;
}

// module.exports = SubcatProducts;