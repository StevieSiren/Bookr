const express = require('express'),
      router = express.Router();


const Artist = require('../models/Artist'),
      Shows = require('../models/Shows');


router.get('/', (req, res) => {
    res.send('hello world');
});

router.get('/home/:id', (req, res) => {
        // Get all recipes from database
        Artist.find({}, (err, allArtists) => {
            if(err) {
                console.log(err);
            } else {
                Shows.find({}, (err, allShows) => {
                    if(err) {
                        console.log(err);
                    } else {
                        res.render('dashboard-fan', {
                            artists: allArtists,
                            shows: allShows
                        });
                    }
                });
            }
        });
    });

module.exports = router;