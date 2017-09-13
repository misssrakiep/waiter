const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const Waiter = require('./waiter');
const Models = require('./models');
const mongoose = require('mongoose');
const helpers = require('handlebars-helpers');
const models = Models(process.env.MONGO_DB_URL ||'mongodb://localhost:27017/waiter');
const waiter = Waiter(models);
const app = express();

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
//grab static files in public folder
app.use(express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

//parse the application
app.use(bodyParser.json());

////////////////////////////////////////////////////////////
app.get('/', function(req, res) {
  res.redirect('/waiter')
});

app.get('/waiter', waiter.home);
app.get('/waiter/:username', waiter.index);
app.post('/waiter/:username', waiter.updateOrAdd);
app.get('/days', waiter.days);
app.post('/days', waiter.days);




const port = process.env.PORT || 3030;
app.listen(port, function() {
  console.log('Running on port ' + port);
});
app.set('port', process.env.PORT || port);
