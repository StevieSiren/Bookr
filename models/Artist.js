const mongoose = require('mongoose');

// =======================================================================
// === RECIPE SCHEMA SETUP === //
// =======================================================================


var artistSchema = new mongoose.Schema({
    name: String,
    img: String
});

module.exports = mongoose.model('Artist', artistSchema);