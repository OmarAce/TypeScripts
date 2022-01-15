// Dependancies
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');


const hbs = require('express-handlebars');
const sequelize = require('sequelize');
const seq = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store)
// import sequelize connection

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3001;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({extname:'hbs', defaultLayout: 'layout/main', layoutsDir:__dirname +'/views/'}));

const sess = {
  secret: 'super-secret',
  cookie: {
    maxAge: 3600000
  },
  resave: false,
  saveUninitialzed: true,
  store: new SequelizeStore({
    db: seq
  })
}

// middleware
app.use(session(sess))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// sync sequelize models to the database, then turn on the server
seq.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
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
