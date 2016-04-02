// server.js

// initialize express
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

// configure app to user bodyParser
// so we can get data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;   // designate port

// API ROUTES
// =============================================================================
var router = express.Router();         // instantiate express router

// test route
router.get('/', function(req, res) {
  res.json({ message: 'API Endpoint is working!' });
});

// ROUTE REGISTRATION
app.use('/a', router);

// START SERVER
// =============================================================================
app.listen(port);
console.log(port + ' says hi!');
