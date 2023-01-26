
module.exports=(sequelize,Sequelize)=>{ 
    const Cart =sequelize.define('cart', {
    id : {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    subCatId : {
        type: Sequelize.INTEGER
    },
    userId : {
        type:Sequelize.INTEGER
    },
    productId : {
        type:Sequelize.INTEGER
    },
    totalPrice : {
        type:Sequelize.DOUBLE
    },
    item_total : {
        type:Sequelize.DOUBLE
    },
    quantity : {
        type:Sequelize.INTEGER
    }
    
})
return Cart;
};
