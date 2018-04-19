var express = require('express');
var router = express.Router();
var team_dal = require('./dal/team_dal');

router.get('/all', function(req, res, next) {
    team_dal.getAll(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('team/team_view_all', {teams: result[0], team_name: result, team_state: result});
        }

    })

});

router.get('/add', function(req, res) {
    res.render('team/team_add');
});

router.get('/insert', function(req, res) {
    team_dal.insert(req.query, function(err, result) {
        if(err) {
            console.log(err);
            res.sender(err);
        } else {
            res.redirect(302, '/team/all')
        }
    });
});

router.get('/edit', function(req, res) {
    team_dal.getinfo(req.query.team_id, function(err, result) {
        if(err) { res.send(err); }
        else {
            res.render('team/teamUpdate', {team: result[0][0], team_name: result[1], team_state: result[2]}
            );
        }
    });
});

router.get('/update', function(req, res) {
    team_dal.update(req.query, function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/team/all');
        }
    });
});


module.exports = router;