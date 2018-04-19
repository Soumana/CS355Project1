var express = require('express');
var router = express.Router();
var owner_dal = require('./dal/owner_dal');

router.get('/all', function(req, res, next) {
    owner_dal.getAll(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('owner/owner_view_all', {owners: result[0], first_name: result, last_name: result, owner_team: result});
        }

    })

});

router.get('/add', function(req, res) {
    res.render('owner/owner_add');
});

router.get('/insert', function(req, res) {
    owner_dal.insert(req.query, function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            res.redirect(302, '/owner/all')
        }
    });
});

router.get('/edit', function(req, res) {
    owner_dal.getinfo(req.query.owner_id, function(err, result) {
        if(err) { res.send(err); }
        else {
            res.render('owner/ownerUpdate', {owner: result[0][0], first_name: result[1], last_name: result[2], owner_team: result[3]}
            );
        }
    });
});

router.get('/update', function(req, res) {
    owner_dal.update(req.query, function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/owner/all');
        }
    });
});

module.exports = router;