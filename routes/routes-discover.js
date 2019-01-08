const express = require('express'),
      router = express.Router();

const User = require('../models/User');

router.get('/', (req, res) => {
    User.find({}, (err, allUsers) => {
        if(err) {
            console.log('There was an error getting all the artists.');
        } else {
            res.render('discover-main', {users: allUsers});
        }
    });
});




module.exports = router;