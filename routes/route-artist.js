const express = require('express'),
      router = express.Router(),
      mongoose = require('mongoose');

const Artist = require('../models/Artist'),
      User = require('../models/User-Fan'),
      Bid = require('../models/Bid');

// ARTIST PROFILE PUBLIC END
router.get('/', (req, res) => {
    // var foundId = req.params.id;
    res.send('Router is working.')
    // res.render('profile-artist');
});

router.get('/:id', (req, res) => {
    // Find recipe with the provided ID
    var id = req.params.id;
    Artist.findById(id).exec((err, foundArtist) => {
        if(err) {
            console.log(err);
        } else {
            res.render('profile-artist', {
                artist: foundArtist,
                currentUser: req.user
            });
        }
    });
});

// COLLECT INFORMATION ABOUT THE BID AND STORE IT TO THE USER MODEL

router.post('/:id', (req, res) => {
    Bid.create({amount: req.body.bidAmount}, (err, bid) => {
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
                res.render('profile-artist', {
                    artist: foundArtist,
                    currentUser: req.user
                });
            }
        });
    });
});


module.exports = router;