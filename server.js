var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var path = require('path');
app.use(express.static(path.join(__dirname, 'build')));

// viewed at http://localhost:8080
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8080);