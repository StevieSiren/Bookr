const mongoose = require('mongoose');


var bidSchema = new mongoose.Schema({
    amount: Number
});

module.exports = mongoose.model('Bid', bidSchema);