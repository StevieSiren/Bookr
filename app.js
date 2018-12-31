const express = require('express'),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      passport = require('passport'),
      LocalStrategy = require('passport-local'),
      passportLocalMongoose = require('passport-local-mongoose');

// REQUIRING THE ROUTES
const homeRoute = require('./routes/routes-home'),
      artists = require('./routes/route-artist'),
      fans = require('./routes/routes-fan'),
      discover = require('./routes/routes-discover');

// GETTING THE DATA MODELS
const Artist = require('./models/Artist'),
      Fan = require('./models/User-Fan');

// ===============================================================================
// === APP SETUP ====================================================================
// ===============================================================================

app.use(require("express-session")({
    secret: 'This is my session secret',
    resave: false,
    saveUninitialized: false
}));

app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());

// app.use(session());
// app.use(require('flash')());
// app.use((req, res) => {
//     req.flash('info', 'Hello World');
//     next();
// })
// Passport setup for Fan accounts
passport.use(new LocalStrategy(Fan.authenticate()));
passport.serializeUser(Fan.serializeUser());
passport.deserializeUser(Fan.deserializeUser());

// Middleware to include currentUser in all routes
app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    next();
});

app.set('view engine', 'ejs');

// DATABASE CONNECTION

mongoose.connect("mongodb://localhost:27017/bookr-test-data", {useNewUrlParser: true});



// ===============================================================================
// === TEST DATA | SEEDING THE DATABASE ==========================================
// ===============================================================================

const seedDB = require('./seeds');

// seedDB();


// ===============================================================================
// === ROUTES ====================================================================
// ===============================================================================

// HOMEPAGES / INDEX

app.use('/', homeRoute);


// ARTIST ROUTES

app.use('/artists', artists);          


// DISCOVER ROUTES
app.use('/discover', discover);


// FAN ROUTES
app.use('/fans', fans);



// ===============================================================================
// === APP LISTENING ====================================================================
// ===============================================================================

app.listen(8080, () => {
    console.log('Bookr is live.');
});