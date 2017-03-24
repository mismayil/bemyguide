/*
** Database Init
*/

'use strict';

let debug = require('debug')('app:server');

let models = [];

function dbinit(models) {
    if (models.length > 0) {
        let model = models.pop();
        model.sync().then(function () {
            dbinit(models);
        });
    } else {
        debug('Database successfully initialized!');
    }
}

dbinit(models);

