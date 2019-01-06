const mongoose = require('mongoose'),
      passportLocalMongoose = require('passport-local-mongoose');


// Going to be merging the Artist and User models together

const userFanSchema = new mongoose.Schema({
    username: String,
    password: String,
    avatar: String,
    firstName: String,
    lastName: String,
    email: String,
    description: String,
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
    }],
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    followerCount: Number
});

userFanSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model('User', userFanSchema);