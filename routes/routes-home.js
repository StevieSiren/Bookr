const express = require('express'),
      router = express.Router(),
      mongoose = require('mongoose'),
      passport = require('passport'),
      bodyParser = require('body-parser'),
      LocalStrategy = require('passport-local'),
      passportLocalMongoose = require('passport-local-mongoose');

const Artist = require('../models/Artist'),
      Fan = require('../models/User-Fan');

// HOME PAGE
router.get('/', (req, res) => {
    res.render('index');
});




// AUTHENTICATION ROUTES
router.get('/signup', (req, res) => {
    res.render('signup');
});

router.post('/signup', (req, res) => {
    Fan.register(new Fan({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    }), req.body.password, (err, user) => {
        if(err) {
            console.log(err);
            return res.render('signup');
        }
        passport.authenticate('local')(req, res, function() {
            res.redirect('/home');
        });
    });
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login'
}), (req, res) => {
    res.send('you hit the post route for login!');
});

// Middleware to check if the user is logged in
const isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}


// router.get('/home', isLoggedIn, (req, res) => {
//     Artist.find({}, (err, allArtists) => {
//         if(err) {
//             console.log('There was an error getting all the artists.');
//         } else {
//             // res.sendFile(path.join(__dirname + '/js/profile-artist.js'));
//             res.render('dashboard-fan', {artists: allArtists, currentUser: req.user});
//         }
//     });
// });



router.get('/home', isLoggedIn, (req, res) => {
    Artist.find({}, (err, allArtists) => {
        if(err) {
            console.log('There was an error getting all the artists.');
        } else {
            
            res.render('dashboard-fan', {artists: allArtists, currentUser: req.user});
        }
    });
});





router.get('/users/:id', (req, res) => {
    Fan.findById(req.params.id, (err, foundUser) => {
        if(err) {
            console.log('There was an error finding this user!');
            res.redirect('/home');
        } else {
            res.render('profile-public', {user: foundUser});
        }
    });
});



// router.get('/discover', isLoggedIn, (req, res) => {
//     Artist.find({}, (err, allArtists) => {
//         if(err) {
//             console.log('There was an error getting all the artists.');
//         } else {
//             // res.sendFile(path.join(__dirname + '/js/profile-artist.js'));
//             res.render('discover-main', {artists: allArtists, currentUser: req.user});
//         }
//     });
// });






router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});





// router.get('/discover', (req, res) => {
//     Artist.find({}, (err, allArtists) => {
//         if(err) {
//             console.log('There was an error getting all the artists.');
//         } else {
//             // res.sendFile(path.join(__dirname + '/js/profile-artist.js'));
//             res.render('discover-main', {artists: allArtists});
//         }
//     });
// });


module.exports = router;