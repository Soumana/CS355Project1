var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'CALL team_getall();';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO team (team_name, team_state) VALUES (?, ?)';

    var queryData = [params.team_name, params.team_state];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.getinfo = function(team_id, callback) {
    var query = 'CALL team_getinfo(?)';
    var queryData = [team_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.update = function(params, callback) {
    var query = 'UPDATE team SET team_name = ?, team_state = ? WHERE team_id = ?';
    var queryData = [params.team_name, params.team_state, params.team_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);

    });

};

exports.delete = function(params, callback) {
    var query = 'Delete FROM team WHERE team_id = ?';
    var queryData = [params.team_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result)

    });
};