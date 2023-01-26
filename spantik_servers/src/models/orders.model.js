module.exports=(sequelize,Sequelize)=>{ 
    
    const Orders = sequelize.define('orders', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        userId: {
            type: Sequelize.INTEGER
        },
        totalPrice:{
            type:Sequelize.DOUBLE
        },
        status:{
            type:Sequelize.STRING
        },
        date:{
            type:Sequelize.DATE
        },
        shipDate:{
            type:Sequelize.DATE
        } 
    });
 return Orders;
}