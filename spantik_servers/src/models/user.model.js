const Sequelize = require('sequelize');
const sequelize = require('../config/db');
module.exports= (sequelize,Sequelize) =>{

const User = sequelize.define('register', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
    userName: {
        type: Sequelize.STRING
    },
    cnicName:{
        type:Sequelize.STRING
    },
    cnicNumber:{
        type:Sequelize.INTEGER
    },
    phoneNumber:{
        type:Sequelize.INTEGER
    },
    storeName:{
        type:Sequelize.STRING
    },
    location:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    },
    isAdmin:{
        type:Sequelize.BOOLEAN
    },
    otp:{
        type:Sequelize.INTEGER
    }

    
});
return User;
}

// module.exports = User;
