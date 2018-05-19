var express = require('express');
var router = express.Router();
var queries_dal = require('./dal/queries_dal');

router.get('/query8', function(req, res) {
    queries_dal.query8(req.query, function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.render('Queries/query_8', {owners: result})
        }


    });

});

router.get('/query6', function(req, res) {
    queries_dal.query6(req.query, function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.render('Queries/query_6', {players: result})
        }


    });

});

router.get('/query4', function(req, res) {
    queries_dal.query4(req.query, function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.render('Queries/query_4', {players: result[0]})
        }


    });

});

router.get('/query10', function(req, res) {
    queries_dal.query10(req.query, function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.render('Queries/query_10', {owners: result})
        }


    });

});

router.get('/query3', function(req, res) {
    queries_dal.query3(req.query, function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.render('Queries/query_3', {players: result})
        }


    });

});


router.get('/query9', function(req, res) {
    queries_dal.query9(req.query, function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.render('Queries/query_9', {teams: result, owners: result})
        }


    });

});

module.exports = router;