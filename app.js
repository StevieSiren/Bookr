const express = require('express'),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');

// REQUIRING THE ROUTES
const homeRoute = require('./routes/route-home'),
      artists = require('./routes/route-artist'),
      fans = require('./routes/routes-fan');

// GETTING THE DATA MODELS
const Artist = require('./models/Artist');

// ===============================================================================
// === APP SETUP ====================================================================
// ===============================================================================

app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// DATABASE CONNECTION

mongoose.connect("mongodb://localhost:27017/bookr-test-data");



// ===============================================================================
// === TEST DATA | SEEDING THE DATABASE ==========================================
// ===============================================================================

const seedDB = require('./seeds');

// seedDB();


// ===============================================================================
// === ROUTES ====================================================================
// ===============================================================================

// HOMEPAGE / INDEX

app.use('/', homeRoute);


// ARTIST ROUTES

app.use('/artists', artists);          






// FAN ROUTES
app.use('/fans', fans);



// Signup Page
app.get('/signup', (req, res) => {
    res.render('signup');
});


// ===============================================================================
// === APP LISTENING ====================================================================
// ===============================================================================

app.listen(8080, () => {
    console.log('Bookr is live.');
});