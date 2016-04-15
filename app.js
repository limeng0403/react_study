var ejs = require('ejs');
var path = require('path');
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use('/js', express.static('js'));

app.get('/', function(req, res) {
    var fileName = req.query.name;

    if (!fileName) {
        fileName = 'study1.js';
    } else {
        fileName = fileName + '.js';
    }

    res.render('template', {
        title: req.query.name,
        filename: fileName
    });
})

app.listen(3000, function() {
    console.log('connected.');
});