var express = require('express');
var router = express.Router();
//go to mongoose and find all todos
var db = require('../models');
var helpers = require('../helpers/todos');

//this combines the original index and create routes for todos into one route 
router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodo)

//combining the :todoId routes into 1
router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)

module.exports = router;