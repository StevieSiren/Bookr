const mongoose = require('mongoose'),
      passportLocalMongoose = require('passport-local-mongoose');

const userFanSchema = new mongoose.Schema({
    username: String,
    password: String
    // savedArtists: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Artist'
    //         // This needs to reference the Artist instead
    //     }
    // ]
});

userFanSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model('User-Fan', userFanSchema);