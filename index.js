const express=require('express');

const app=express();

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname })
});

app.get('/graffathon', function(req, res) {
    res.sendFile('new_event.html', {root: __dirname })
});
