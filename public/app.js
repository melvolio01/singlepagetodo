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
        var newTodo = $('<li class="task">' +todo.name + '</li>');
        if(todo.completed){
            newTodo.addClass("done");
        }
        $('.list').append(newTodo);
    });
}

// Send request to create todo
function createTodo(){
    var userInput = $("#todoInput").val();
    $.post('/api/todo', {name: userInput})
    .then(function(newTodo){
    console.log(newTodo);
    })
    .catch(function(err){
        console.log(err);
    });
}
