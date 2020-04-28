var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var contactRouter = require('./routes/contact');
var servicesRouter = require('./routes/services');
var disinfectionRouter = require('./routes/disinfection');
var covidRouter = require('./routes/covid');
var virusRouter = require('./routes/virus');
var bacteriaRouter = require('./routes/bacteria');
var mrsaRouter = require('./routes/mrsa');
var cdiffRouter = require('./routes/cdiff');
var hepatitisRouter = require('./routes/hepatitis');
var norovirusRouter = require('./routes/norovirus');
var listeriaRouter = require('./routes/listeria');
var histoplasmosisRouter = require('./routes/histoplasmosis');
var companyRouter = require('./routes/company');
var aboutRouter = require('./routes/about');
var helpRouter = require('./routes/help');
var virusesOrBacteriaRouter = require('./routes/virusesOrBacteria');
var resourcesRouter = require('./routes/resources');
var infoRouter = require('./routes/info');
var responseRouter = require('./routes/response');
var videoRouter = require('./routes/video');
var globalRouter = require('./routes/global');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contact', contactRouter);
app.use('/services', servicesRouter);
app.use('/disinfection', disinfectionRouter);
app.use('/covid', covidRouter);
app.use('/virus', virusRouter);
app.use('/bacteria', bacteriaRouter);
app.use('/mrsa', mrsaRouter);
app.use('/cdiff', cdiffRouter);
app.use('/hepatitis', hepatitisRouter);
app.use('/norovirus', norovirusRouter);
app.use('/listeria', listeriaRouter);
app.use('/histoplasmosis', histoplasmosisRouter);
app.use('/company', companyRouter);
app.use('/about', aboutRouter);
app.use('/help', helpRouter);
app.use('/virusesOrBacteria', virusesOrBacteriaRouter);
app.use('/resources', resourcesRouter);
app.use('/info', infoRouter);
app.use('/response', responseRouter);
app.use('/video', videoRouter);
app.use('/global', globalRouter);


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

