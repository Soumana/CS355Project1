var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'CALL owner_getall();';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO owner (first_name, last_name, owner_team) VALUES (?, ?, ?)';

    var queryData = [params.first_name, params.last_name, params.owner_team ];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.getinfo = function(owner_id, callback) {
    var query = 'CALL owner_getinfo(?)';
    var queryData = [owner_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.update = function(params, callback) {
    var query = 'UPDATE owner SET first_name = ?, last_name = ?, owner_team = ? WHERE owner_id = ?';
    var queryData = [params.first_name, params.last_name, params.owner_team, params.owner_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);

    });

};


exports.delete = function(params, callback) {
    var query = 'Delete FROM owner WHERE owner_id = ?';
    var queryData = [params.owner_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result)

    });
};