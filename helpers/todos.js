var db = require('../models');

exports.getTodos = function(req, res){
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
}

exports.createTodo = function(req, res){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    });
}

exports.getTodo = function(req, res){
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
        res.json(foundTodo)
    })
    .catch(function(err){
        res.send(err);
    });
}

exports.updateTodo = function(req, res){
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body)
    .then(function(todo){
        res.json(todo);
    })
    .catch(function(err){
        res.send(err);
    });
}

exports.deleteTodo = function(req, res){
    db.Todo.remove({_id: req.params.todoId})
    .then(function(){
        res.json({message: "We deleted it!"})
    })
    .catch(function(err){
        res.send(err);
    });
}

module.exports = exports;