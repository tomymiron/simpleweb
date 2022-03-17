//dependencies
const express = require('express');
const path = require('path');

//variables and constants
const server = express();

//setting
server.set('port', 3000);

//middlewares

//routes
server.get('/', (req, res)=>{
    console.log("A user logged into the home");
    res.render('index.html');
});
server.get('/about', (req, res)=>{
    console.log("A user logged into the home");
    res.render('about.html', {title: "about"});
});

//listening the server
server.listen(server.get('port'), ()=>{
    console.log("server listening at port " + server.get('port'));
});