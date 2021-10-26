const createError = require('http-errors')
const express = require("express")
const app = express()
const path = require('path');
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const bodyParser = require("body-parser")
const multer = require('multer')
const upload = multer()
const port = 3000
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.post('/getinfo',function(req,res){
  console.log(req.body)
  res.json(req.body)
  res.status(200).send()
})

module.exports = app;