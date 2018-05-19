var mysql = require('mysql');
var db = require('./db_connection.js');
var connection = mysql.createConnection(db.config);



exports.query8 = function(params, callback) {
    var query = 'select first_name, last_name, owner_team from owner order by owner.last_name, owner.first_name';

    //var queryData = [params.team_name, params.team_state];

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};


exports.query6 = function(params, callback) {
    var query = 'select first_name, last_name, player_team, jersey_number from player join team on team.team_name = player.player_team where jersey_number = 1 group by first_name, last_name';


    connection.query(query, function(err, result) {
        callback(err, result);
    });
};


exports.query4 = function(params, callback) {

    var query = 'CALL golden_getall()';



    connection.query(query, function(err, result) {
        callback(err, result);
    });

};



exports.query10 = function(params, callback) {

    var query = 'select distinct owner_team from owner';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};


exports.query3 = function(params, callback) {

    var query = 'select first_name, last_name, player_team from player where player_team in (select team_name from team)';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.query9 = function(params, callback) {

    var query = 'select team_id, team_name from team union select owner_id, first_name from owner';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};