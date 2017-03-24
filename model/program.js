/*
 ** PROGRAM MODEL
 */

'use strict';

let Sequelize = require('sequelize');
let Database = require('../db/database');

const MODEL_NAME = 'program';

const ATTRIBUTES = {
    name: {
        type: Sequelize.STRING,
        field: 'name',
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        field: 'description'
    },
    faculty: {
        type: Sequelize.STRING,
        field: 'faculty'
    },
    degree: {
        type: Sequelize.STRING,
        field: 'degree'
    },
    website: {
        type: Sequelize.STRING,
        field: 'website'
    },
    length: {
        type: Sequelize.STRING,
        field: 'length'
    },
    natCost: {
        type: Sequelize.STRING,
        field: 'natCost'
    },
    intCost: {
        type: Sequelize.STRING,
        field: 'intCost'
    },
    prerequisite: {
        type: Sequelize.STRING,
        field: 'prerequisite'
    },
    admission: {
        type: Sequelize.STRING,
        field: 'admission'
    },
    appFee: {
        type: Sequelize.STRING,
        field: 'appFee'
    }
};
const OPTIONS = {
    classMethods: {},
    instanceMethods: {}
};

let Program = Database.define(MODEL_NAME, ATTRIBUTES, OPTIONS);

module.exports = Program;
