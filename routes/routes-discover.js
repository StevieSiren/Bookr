const express = require('express'),
      router = express.Router();

const Artist = require('../models/Artist');

router.get('/', (req, res) => {
    Artist.find({}, (err, allArtists) => {
        if(err) {
            console.log('There was an error getting all the artists.');
        } else {
            res.sendFile(path.join(__dirname + '/js/profile-artist.js'));
            res.render('discover-main', {artists: allArtists});
        }
    });
});




module.exports = router;