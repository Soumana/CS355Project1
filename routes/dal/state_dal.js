var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'CALL state_getall();';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO state (state_name) VALUES (?)';

    var queryData = [params.state_name];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.getinfo = function(state_id, callback) {
    var query = 'CALL state_getinfo(?)';
    var queryData = [state_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.update = function(params, callback) {
    var query = 'UPDATE state SET state_name = ? WHERE state_id = ?';
    var queryData = [params.state_name, params.state_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);

    });

};

exports.delete = function(params, callback) {
    var query = 'Delete FROM state WHERE state_id = ?';
    var queryData = [params.state_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result)

    });
};