var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var roadtransportRouter = require('./routes/roadtransport');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var roadtransport = require('./models/roadtransport');
var resourceRouter = require('./routes/resource');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/roadtransport', roadtransportRouter);
app.use('/board',boardRouter);
app.use('/selector',selectorRouter);
app.use('/resource',resourceRouter);

var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

// We can seed the collection if needed on server start
async function recreateDB(){
// Delete everything
await roadtransport.deleteMany();
let instance1 = new
roadtransport({roadtransport_type:"2 wheeler", roadtransport_name:"Bike",
roadtransport_cost:10000});
instance1.save().then( function(err,doc) {
if(err) return console.error(err);
console.log("First object saved")
});
let instance2 = new
roadtransport({roadtransport_type:"4 wheeler", roadtransport_name:"Car",
roadtransport_cost:50000});
instance2.save().then( function(err,doc) {
if(err) return console.error(err);
console.log("Second object saved")
});
let instance3 = new
roadtransport({roadtransport_type:"6 wheeler", roadtransport_name:"Truck",
roadtransport_cost:100000});
instance3.save().then( function(err,doc) {
if(err) return console.error(err);
console.log("Third object saved")
});

}
let reseed = false;
if (reseed) { recreateDB();}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
