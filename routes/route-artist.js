const express = require('express'),
      router = express.Router(),
      mongoose = require('mongoose'),
      passport = require('passport'),
      bodyParser = require('body-parser'),
      LocalStrategy = require('passport-local'),
      passportLocalMongoose = require('passport-local-mongoose');

const Artist = require('../models/Artist'),
      User = require('../models/User-Fan'),
      Bid = require('../models/Bid');

// ARTIST PROFILE PUBLIC END
router.get('/', (req, res) => {
    // var foundId = req.params.id;
    res.send('Router is working.')
    // res.render('profile-artist');
});



// Check to see if someone accessing this route has an account
const isUser = (req, res, next) => {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('/signup');
}

router.get('/:id', isUser,(req, res) => {
    // Find recipe with the provided ID
    var id = req.params.id;
    Artist.findById(id).exec((err, foundArtist) => {
        if(err) {
            console.log(err);
        } else {
            Bid.find({}).where('artistID').equals(id).exec((err, allBids) => {
                if(err) {
                    console.log(err);
                } else {
                    res.render('profile-artist', {
                        artist: foundArtist,
                        currentUser: req.user,
                        bids: allBids
                    });
                }
            });
        }
    });
});





// COLLECT INFORMATION ABOUT THE BID AND STORE IT TO THE USER MODEL

router.post('/:id/bid', (req, res) => {
    var id = req.params.id;
    Bid.create({
        amount: req.body.bidAmount, 
        location: req.body.location,
        artistName: req.body.artistName,
        artistID: id,
        userID: req.user._id,
        username: req.body.username
    }, (err, bid) => {
        if(err) {
            console.log(err);
            return res.redirect('/:id');
        }
        User.findById(req.user._id).exec((err, foundUser) => {
            if(err) {
                console.log(err);
            } else {
                foundUser.bids.push(bid);
                foundUser.save();
            }
        });
       
        var id = req.params.id;
        Artist.findById(id).exec((err, foundArtist) => {
            if(err) {
                console.log(err);
            } else {
                foundArtist.bids.push(bid);
                foundArtist.save();
                res.render('bid-complete', {
                    artist: foundArtist,
                    currentUser: req.user,
                    bid: bid
                });
                // 6
            }
        });
    });
});

router.post('/:id/saved-artist', (req, res) => {
    var artistID = req.params.id;
    Artist.findById(artistID, (err, foundArtist) => {
        if(err) {
            console.log(err);
        } else {
            User.findById(req.user._id).exec((err, foundUser) => {
                if(err) {
                    console.log(err);
                } else {
                    foundUser.savedArtists.push(foundArtist);
                    foundUser.save();
                    res.render('profile-artist', {
                        artist: foundArtist,
                        currentUser: req.user
                    });
                }
            });
        }
    });
});


module.exports = router;