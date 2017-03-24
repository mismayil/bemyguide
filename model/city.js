/*
 ** CITY MODEL
 */

'use strict';

let Sequelize = require('sequelize');
let Database = require('../db/database');
let University = require('./city');

const MODEL_NAME = 'city';

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

let City = Database.define(MODEL_NAME, ATTRIBUTES, OPTIONS);
City.hasMany(University);

module.exports = City;
