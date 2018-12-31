const mongoose = require('mongoose');


var bidSchema = new mongoose.Schema({
    amount: Number,
    location: String,
    artistName: String,
    artistID: mongoose.Schema.Types.ObjectId,
    userID: mongoose.Schema.Types.ObjectId,
    username: String
});

module.exports = mongoose.model('Bid', bidSchema);