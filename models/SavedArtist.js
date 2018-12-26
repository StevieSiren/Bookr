const mongoose = require('mongoose');

const savedArtistSchema = mongoose.Schema({
    name: String,
    img: String
});

module.exports = mongoose.model('SavedArtist', savedArtistSchema);