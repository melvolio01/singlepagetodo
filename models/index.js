var mongoose = require('mongoose');
//this allows us to see what is happening with program at any given point
mongoose.set('debug', true);
//name for this url doesn't really matter - if it doesn't already exist it will be created for us
// mongoose.connect('mongodb://localhost/todo-api');
mongoose.connect('mongodb://melvin:onepage@ds159274.mlab.com:59274/singlepagetodo');


//allows us to use the mongoose promise library
mongoose.Promise = Promise;

module.exports.Todo = require('./todo');
