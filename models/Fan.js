const mongoose = require('mongoose');

const fanSchema = new mongoose.Schema({
    name: String,
    savedArtistsTest: [
        {
            name: String
        }
    ]
    // savedArtists: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Artist'
    //         // This needs to reference the Artist instead
    //     }
    // ]
});




module.exports = mongoose.model('Fan', fanSchema);