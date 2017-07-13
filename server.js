//dependencies 
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//express app
var app = express();
var PORT = 3000;

//setting up data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));

//routes
app.get("/", function(req,res){
res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req,res){
res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req,res){
res.json(tables);
});

//reserve a table

app.post("/api/new", function(req,res){
  


$("#add-btn").on("click", function(event) {
      event.preventDefault();
      var newCharacter = {
        reserve_name: $("#reserve_name").val().trim(),
        reserve_phone: $("#reserve_phone").val().trim(),
        reserve_email: $("#reserve_email").val().trim(),
        reserve_uniqueID: $("#reserve_uniqueID").val().trim()
      };

      // Question: What does this code do??
      $.post("/api/new", newCharacter)
      .done(function(data) {
        console.log(data);
        alert("Adding character...");
      });
    });
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});