/*
** DATABASE API
*/

'use strict';

let Sequelize = require('sequelize');
let config = require('../config');

let Database = new Sequelize(config.DB_NAME, null, null, {
    host: config.HOST,
    dialect: config.DB_SYSTEM,
    storage: config.DB_FILE,
    define: {
        freezeTableName: true,
        classMethods: {},
        instanceMethods: {}
    }
});

module.exports = Database;
