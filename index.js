var express = require('express'),
        //Setting the 'app' as express functionality
        app = express(),
        port = process.env.PORT || 3000;

var todoRoutes = require('./routes/todo'); 
 
app.get('/', function(req, res){
    //alternatively could use res.send(), which calls res.json()
   res.json({message: "Hi there from Express"}); 
});

//adds the prefix to all of the todoRoutes we make
app.use('/api/todo', todoRoutes);
       
//Sets app to 'listen' on a particular port - default being 8080
app.listen(process.env.PORT, function(){
    console.log("App is running on port " + process.env.PORT );
});