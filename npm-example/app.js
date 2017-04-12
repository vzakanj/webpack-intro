var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Hello from our HTTP server");
});

var port = 3333;
var host = "localhost";

app.listen(port, host, function() {
    console.log("Server is listening on " + host + ":" + port);
});