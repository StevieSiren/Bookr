const express = require('express'),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser');


app.use(express.static(path.join(__dirname + '/public')));
app.set('view engine', 'ejs');



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
    res.render('listenerdash');
});




// ARTIST PROFILE PUBLIC END
app.get('/artist/:id', (req, res) => {
    res.render('profile-artist');
});




// ===============================================================================
// === APP LISTENING ====================================================================
// ===============================================================================

app.listen(8080, () => {
    console.log('Bookr is live.');
});