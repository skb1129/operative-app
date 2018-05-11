var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var path = require('path');
app.use(express.static(path.join(__dirname, 'static')));

// viewed at http://localhost:8080
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.listen(8080, () => console.log('The application is running on port 8080!!!!!'));