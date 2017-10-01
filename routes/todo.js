var express = require('express');
var router = express.Router();
//go to mongoose and find all todos
var db = require('../models');


router.get('/', function(req, res){
    //find all todos
    db.Todo.find()
    //promise, insted of (req, res) etc to 'respond' with all todos in json format
    .then(function(todos){
       res.json(todos); 
    })
    //'catching' any errors and responding with them
    .catch(function(err){
       res.send(err); 
    });
});

module.exports = router;