// server.js

// initialize express
var express        = require('express'),
    app            = express(),
    mysql          = require('mysql'),
    connectionpool = mysql.createPool({
        host     : 'localhost',
        user     : 'root',
        password : 'secret',
        database : 'rest_demo'
    }),
res.setHeader({ 'Content-Type: 'application/json', });
app.get('/a', function(req, res){});

