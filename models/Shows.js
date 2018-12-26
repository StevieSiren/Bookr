const mongoose = require('mongoose');


var showSchema = new mongoose.Schema({
    artist: String,
    location: String,
    time: Date,
    fans: Number
});

module.exports = mongoose.model('Shows', showSchema);