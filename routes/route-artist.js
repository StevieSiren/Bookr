const express = require('express'),
      router = express.Router();

// ARTIST PROFILE PUBLIC END
router.get('/artists', (req, res) => {
    // var foundId = req.params.id;
    res.send('Router is working.')
    // res.render('profile-artist');
});


module.exports = router;