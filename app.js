const express = require('express'),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');



// ===============================================================================
// === APP SETUP ====================================================================
// ===============================================================================

app.use(express.static(path.join(__dirname + '/public')));
app.set('view engine', 'ejs');

// DATABASE CONNECTION

mongoose.connect("mongodb://localhost:27017/bookr-test-data");



// ===============================================================================
// === TEST DATA ====================================================================
// ===============================================================================

const seedDB = require('./seeds');

seedDB();


// ===============================================================================
// === ROUTES ====================================================================
// ===============================================================================

app.get('/', (req, res) => {
    res.render('index');
});


// Signup Page
app.get('/signup', (req, res) => {
    res.render('signup');
});


// FAN DASHBOARD
app.get('/fan/:id', (req, res) => {
    res.render('listenerdash', {artists: artists});
});




// ARTIST PROFILE PUBLIC END
app.get('/artist/:id', (req, res) => {
    var foundId = req.params.id;
    
    res.render('profile-artist');
});




// ===============================================================================
// === APP LISTENING ====================================================================
// ===============================================================================

app.listen(8080, () => {
    console.log('Bookr is live.');
});