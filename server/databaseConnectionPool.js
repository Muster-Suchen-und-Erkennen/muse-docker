'use strict';
var mysql = require('mysql');
var config = {
    host: 'db',
    port: 3306,
    user: 'muse',
    password: 'muse',
    charset: 'UTF8_GENERAL_CI',
    db: 'KostuemRepo',
    connectionLimit: 50
};
module.exports.pool = mysql.createPool(config);
module.exports.config = config;
