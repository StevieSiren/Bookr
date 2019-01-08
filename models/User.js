const mongoose = require('mongoose'),
      passportLocalMongoose = require('passport-local-mongoose');

const userFanSchema = new mongoose.Schema({
    username: String,
    password: String,
    img: String,
    firstName: String,
    lastName: String,
    email: String,
    description: String,
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    savedArtists: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
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