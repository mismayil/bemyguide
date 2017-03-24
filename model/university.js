/*
 ** UNIVERSITY MODEL
 */

'use strict';

let Sequelize = require('sequelize');
let Database = require('../db/database');
let Program = require('./university');

const MODEL_NAME = 'university';

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
    address: {
        type: Sequelize.STRING,
        field: 'address'
    },
    website: {
        type: Sequelize.STRING,
        field: 'website'
    },
    telephone: {
        type: Sequelize.STRING,
        field: 'telephone'
    },
    fax: {
        type: Sequelize.STRING,
        field: 'fax'
    },
    email: {
        type: Sequelize.STRING,
        field: 'email'
    },
    language: {
        type: Sequelize.STRING,
        field: 'language'
    },
    instType: {
        type: Sequelize.STRING,
        field: 'instType'
    },
    entranceDates: {
        type: Sequelize.STRING,
        field: 'entranceDates'
    },
    natTuition: {
        type: Sequelize.STRING,
        field: 'natTuition'
    },
    intTuition: {
        type: Sequelize.STRING,
        field: 'intTuition'
    },
    fullTimeUndGrads: {
        type: Sequelize.INTEGER,
        field: 'fullTimeUndGrads'
    },
    scholarship: {
        type: Sequelize.STRING,
        field: 'scholarship'
    },
    livingCost: {
        type: Sequelize.STRING,
        field: 'livingCost'
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

let University = Database.define(MODEL_NAME, ATTRIBUTES, OPTIONS);
University.hasMany(Program);

module.exports = University;
