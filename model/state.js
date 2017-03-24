/*
 ** STATE MODEL
 */

'use strict';

let Sequelize = require('sequelize');
let Database = require('../db/database');
let City = require('./city');

const MODEL_NAME = 'state';

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

let State = Database.define(MODEL_NAME, ATTRIBUTES, OPTIONS);
State.hasMany(City);

module.exports = State;
