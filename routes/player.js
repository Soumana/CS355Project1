var express = require('express');
var router = express.Router();
var player_dal = require('./dal/player_dal');

router.get('/all', function(req, res, next) {
    player_dal.getAll(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('player/player_view_all',
                {players: result[0], first_name: result, last_name: result, player_team: result, jersey_number: result, position: result, height: result, weight: result, was_successful_delete: req.query.was_successful_delete});
        }

    })

});

router.get('/add', function(req, res) {
    res.render('player/player_add');
});

router.get('/insert', function(req, res) {
    player_dal.insert(req.query, function(err, result) {
        if(err) {
            console.log(err);
            res.sender(err);
        } else {
            res.redirect(302, '/player/all')
        }
    });
});

router.get('/edit', function(req, res) {
    player_dal.getinfo(req.query.player_id, function(err, result) {
        if(err) { res.send(err); }
        else {
            res.render('player/playerUpdate', {player: result[0][0], first_name: result[1], last_name: result[2], player_team: result[3], jersey_number: result[4], position: result[5], height: result[6], weight: result[7]}
            );
        }
    });
});

router.get('/update', function(req, res) {
    player_dal.update(req.query, function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/player/all');
        }
    });
});

router.get('/delete', function(req, res) {
    player_dal.delete(req.query, function(err, result) {
        if (err)
            res.send(err);
        else
            res.redirect(302, '/player/all' + "?&was_successful_delete=1");


    });

});

module.exports = router;