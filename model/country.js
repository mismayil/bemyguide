/*
** COUNTRY MODEL
*/

'use strict';

let Sequelize = require('sequelize');
let Database = require('../db/database');
let State = require('./state');

const MODEL_NAME = 'country';

const ATTRIBUTES = {
    name: {
        type: Sequelize.STRING,
        field: 'name',
        allowNull: false
    }
};
const OPTIONS = {
    classMethods: {},
    instanceMethods: {}
};

let Country = Database.define(MODEL_NAME, ATTRIBUTES, OPTIONS);
Country.hasMany(State);

module.exports = Country;
