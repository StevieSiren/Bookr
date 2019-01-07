const mongoose = require('mongoose'),
      passportLocalMongoose = require('passport-local-mongoose');

const userFanSchema = new mongoose.Schema({
    username: String,
    password: String,
    avatar: String,
    firstName: String,
    lastName: String,
    email: String,
    savedArtists: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Artist'
        }
    ],
    savedShows: [
        {
            name: String
        }
    ],
    bids: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bid'
    }]
});

userFanSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model('User', userFanSchema);