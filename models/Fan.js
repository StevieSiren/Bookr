const mongoose = require('mongoose');

const fanSchema = new mongoose.Schema({
    name: String,
    savedArtists: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SavedArtist'
            // This needs to reference the Artist instead
        }
    ]
});




module.exports = mongoose.model('Fan', fanSchema);