const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const index = require('./routes/index');
const user = require('./routes/user');
const login = require('./routes/login');
const brand = require('./routes/brand');
const order = require('./routes/order');
const cake = require('./routes/cake');
const cakeCategory = require('./routes/category');
const keys = require('./config/keys');

const app = express();            
mongoose.connect(keys.mongodbMobile.dbURI);
const cors = require('cors');   
                          
app.use(cors({origin: 'http://192.168.225.92:5001'}));   
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://192.168.225.92:5001/');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', false);
  next();
});

app.use('/api', index);  
app.use('/api/user', user);
app.use('/api/auth', login);
app.use('/api/brand', brand);
app.use('/api/order', order);
app.use('/api/cake', cake);
app.use('/api/category', cakeCategory);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
