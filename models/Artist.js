const mongoose = require('mongoose');

// =======================================================================
// === RECIPE SCHEMA SETUP === //
// =======================================================================


var artistSchema = new mongoose.Schema({
    name: String,
    img: String,
    fans: Number,
    description: String,
    bids: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bid'
    }],
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = mongoose.model('Artist', artistSchema);