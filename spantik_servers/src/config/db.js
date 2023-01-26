const Sequelize = require('sequelize');

// Requiring config js from config folder
const config= require('./config');



module.exports = new Sequelize(config.db.database, config.db.user, '', {
    host: config.db.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: false,
        freezeTableName: true
    },
});
