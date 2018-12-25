const express = require('express'),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');

// Requiring the routes
const homeRoute = require('./routes/route-home'),
      artists = require('./routes/route-artist');

// ===============================================================================
// === APP SETUP ====================================================================
// ===============================================================================

app.use(express.static(path.join(__dirname + '/public')));
app.set('view engine', 'ejs');

// DATABASE CONNECTION

mongoose.connect("mongodb://localhost:27017/bookr-test-data");



// ===============================================================================
// === TEST DATA | SEEDING THE DATABASE ==========================================
// ===============================================================================

const seedDB = require('./seeds');

seedDB();


// ===============================================================================
// === ROUTES ====================================================================
// ===============================================================================

// HOMEPAGE / INDEX

app.use('/', homeRoute);


// ARTIST ROUTES

app.use('/', artists);          








// Signup Page
app.get('/signup', (req, res) => {
    res.render('signup');
});


// FAN DASHBOARD
app.get('/fan/:id', (req, res) => {
    res.render('listenerdash', {artists: artists});
});





// ===============================================================================
// === APP LISTENING ====================================================================
// ===============================================================================

app.listen(8080, () => {
    console.log('Bookr is live.');
});