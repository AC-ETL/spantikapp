const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const db = require('.');
const Category = db.Category;
module.exports = (sequelize, Sequelize) => {

        const Subcategory = sequelize.define('subcategory', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING
            },
            catId: {
                type: Sequelize.INTEGER

            },
            name_ur: {
                type: Sequelize.STRING
            },
            status: {
                type: Sequelize.BOOLEAN
            },
            imageUrl: {
                type: Sequelize.STRING
            }
        });
        return Subcategory;
    }
    // module.exports = SubcatProducts;