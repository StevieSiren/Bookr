const mongoose = require('mongoose');

const User = require('../../models/User'),
      Artist = require('../../models/Artist'),
      Bid = require('../../models/Bid');


var artists = Artist.find({}, (err, foundArtists) => {
    if(err) {
        console.log(err);
    } else {
        return foundArtists[0].name;
    }
});

console.log(artists);