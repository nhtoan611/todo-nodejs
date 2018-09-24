var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var config = require("./config");
var setupController = require('./api/controllers/setupController');
var todoController = require('./api/controllers/todoController');

var app = express();
var port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));
// đọc dữ liệu ng dùng gửi lên là json
app.use(bodyParser.json()); 
// đọc dữ liệu ng dùng gửi lên là data form
app.use(bodyParser.urlencoded({ extended: true}));

app.use(morgan("dev"));

app.set("view engine", "ejs");

//connect db
mongoose.connect(config.getDbConnectionString(), { useNewUrlParser: true });
setupController(app);
todoController(app);

app.get("/", function(req, res){
    res.render("index");
})

app.listen(port, function(){
    console.log("App listening on port: " + port);
})