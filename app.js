const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv').config();
const connectToDatabase = require('./config/Db');


// Error handling for dotenv configuration

if (dotenv.error) {
  throw dotenv.error
}
console.log(process.env.JWT_PASSWORD, "-----jwt password-----");

// Route imports
const authRouter = require('./routes/authRouter'); 
const jobsRouter = require('./routes/jobsRouter'); 
const userRouter = require('./routes/userRouter');
const studentRouter = require('./routes/studentRouter');
const notificationRouter =require('./routes/notificationRouter');

const  app = express();

// Database connection
connectToDatabase()

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Static files
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use(authRouter);
app.use(jobsRouter);
app.use(userRouter);
app.use(studentRouter);
app.use(notificationRouter);



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

// // Initialize WebSocket server placeholder
app.locals.wss = null;

module.exports = app;
