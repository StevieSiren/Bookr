const express = require('express'),
      router = express.Router();

const Artist = require('../models/Artist');

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
                artist: foundArtist
            });
        }
    });
});


module.exports = router;