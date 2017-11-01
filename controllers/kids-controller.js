// const db = require("../models");
const express = require('express');
const path = require('path');
const parser = require('body-parser');
const app = express();

app.post('/login', function(req, res){
  db.User.find({
    username: username,
    password: password,
    
  });
});

app.post('/signup', function(req, res){
  db.User.find({
    username: username,
    password: password,
    name: name    
  });
});
