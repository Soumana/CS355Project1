var express = require('express');
var router = express.Router();
var state_dal = require('./dal/state_dal');

router.get('/all', function(req, res, next) {
    state_dal.getAll(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('state/state_view_all', {states: result[0], state_name: result, was_successful_delete: req.query.was_successful_delete});
        }

    })

});

router.get('/add', function(req, res) {
    res.render('state/state_add');
});

router.get('/insert', function(req, res) {
    state_dal.insert(req.query, function(err, result) {
        if(err) {
            console.log(err);
            res.sender(err);
        } else {
            res.redirect(302, '/state/all')
        }
    });
});

router.get('/edit', function(req, res) {
    state_dal.getinfo(req.query.state_id, function(err, result) {
        if(err) { res.send(err); }
        else {
            res.render('state/stateUpdate', {state: result[0][0], state_name: result}
            );
        }
    });
});

router.get('/update', function(req, res) {
    state_dal.update(req.query, function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/state/all');
        }
    });
});

router.get('/delete', function(req, res) {
    state_dal.delete(req.query, function(err, result) {
        if (err)
            res.send(err);
        else
            res.redirect(302, '/state/all' + "?&was_successful_delete=1");


    });

});

module.exports = router;