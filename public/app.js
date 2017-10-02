//Just to set global $ variable and stop c9 linting issues
/* global $ */
// console.log("Hello you");
$(document).ready(function(){
    //makes the JSON request to api database and gets todos
    $.getJSON('/api/todo')
    .then(addTodos);
});

$('#todoInput').keypress(function(e){
    if(e.which == 13){
       createTodo();
    };
});


function addTodos(todos){
    //showing todos on front-end from here
    todos.forEach(function(todo){
        //calling the addTodo() function (as below) to add all pre-existing todos to the page
        addTodo(todo);
    });
}

function addTodo(todo){
    //allows us to create a new todo, can also be called on page load for pre-existing todos
    var newTodo = $('<li class="task">' +todo.name + '</li>');
    if(todo.completed){
    newTodo.addClass("done");
    }
    $('.list').append(newTodo);
}

// Send request to create todo
function createTodo(){
    var userInput = $("#todoInput").val();
    $.post('/api/todo', {name: userInput})
    .then(function(newTodo){
    //again, calling addTodo - this time to create a new one.
    addTodo(newTodo);
    $("#todoInput").val('');
    })
    .catch(function(err){
        console.log(err);
    });
}