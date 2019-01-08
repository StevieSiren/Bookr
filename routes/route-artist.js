const express = require('express'),
      router = express.Router(),
      mongoose = require('mongoose'),
      passport = require('passport'),
      bodyParser = require('body-parser'),
      LocalStrategy = require('passport-local'),
      passportLocalMongoose = require('passport-local-mongoose');

const Artist = require('../models/Artist'),
      User = require('../models/User'),
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
    User.findById(id).exec((err, foundUser) => {
        if(err) {
            console.log(err);
        } else {
            Bid.find({}).where('artistID').equals(id).exec((err, allBids) => {
                if(err) {
                    console.log(err);
                } else {
                    res.render('./profiles/profile-public', {
                        user: foundUser,
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
        artistImg: req.body.artistImg,
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
        User.findById(id).exec((err, foundUser) => {
            if(err) {
                console.log(err);
            } else {
                foundUser.bids.push(bid);
                foundUser.save();
                res.render('bid-complete', {
                    user: foundUser,
                    currentUser: req.user,
                    bid: bid
                });
                
            }
        });
    });
});




// SAVE ARTIST ROUTE

router.post('/:id/save', (req, res) => {
    var artistID = req.params.id;
    User.findById(artistID, (err, foundUser) => {
        if(err) {
            console.log(err);
        } else {            
            // Push the user ID into the followers list of the artist
            foundUser.followers.push(req.user._id);
            foundUser.save();
            User.findById(req.user._id).exec((err, foundUser) => {
                if(err) {
                    console.log(err);
                } else {
                    // Push the saved artist into the user's list
                    foundUser.savedArtists.push(foundUser);
                    foundUser.save();
                    Bid.find({}).where('artistID').equals(artistID).exec((err, allBids) => {
                        if(err) {
                            console.log(err);
                        } else {
                            res.render('./profiles/profile-public', {
                                user: foundUser,
                                currentUser: req.user,
                                bids: allBids
                            });
                        }
                    });
                }
            });
        }
    });
});


module.exports = router;