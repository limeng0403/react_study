var express = require('express');
var app = express();

app.use('/js', express.static('js'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '\\study1.html');
})

app.listen(3000, function() {
    console.log('connected.');
});