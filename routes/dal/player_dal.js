var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'CALL player_getall();';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO player (first_name, last_name, player_team, jersey_number, position, height, weight)  VALUES (?, ?, ?, ?, ?, ?, ?)';

    var queryData = [params.first_name, params.last_name, params.player_team, params.jersey_number, params.position, params.height, params.weight];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.getinfo = function(player_id, callback) {
    var query = 'CALL player_getinfo(?)';
    var queryData = [player_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.update = function(params, callback) {
    var query = 'UPDATE player SET first_name = ?, last_name = ?, player_team = ?, jersey_number = ?, position = ?, height = ?, weight = ? WHERE player_id = ?';
    var queryData = [params.first_name, params.last_name, params.player_team, params.jersey_number, params.position, params.height, params.weight, params.player_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);

    });

};