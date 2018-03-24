var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
   res.send("Hello from the root route yo.");
});

app.use('/api/todos', todoRoutes);

app.listen(process.env.PORT, function() {
    // body...
    console.log("APP IS RUNNING ON PORT " + process.env.PORT);
});
