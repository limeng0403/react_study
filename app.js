var path = require('path');
var express = require('express');
var app = express();

app.use('/js', express.static('js'));

app.get('/', function(req, res) {
    var fileName = req.query.name;

    if (!fileName) {
        fileName = 'study1.html';
    } else {
        fileName = fileName + '.html';
    }

    res.sendFile(path.join(__dirname, fileName));
})

app.listen(3000, function() {
    console.log('connected.');
});