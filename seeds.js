const mongoose = require('mongoose');

const Artist = require('./models/Artist');


// Seed the database to create some fake data for testing

var data = [
    {
        name: 'Flying Lotus',
        img: '/img/artist1.jpg'
    },
    {
        name: 'Foy Vance',
        img: '/img/artist2.jpg'
    }
];

function seedDB() {
    // Remove all artists
    Artist.remove({}, (err) => {
        if(err) {
            console.log('There was an error!');
            console.log(err);
        } else {
            console.log('Removed all Artists');
        }
    });

    // Add some recipes
    data.forEach((dataSeed) => {
        Artist.create(dataSeed, (err, artist) => {
            if(err) {
                console.log(err);
            } else {
                console.log('New artists added to DB');
            }
        });
    });
    
};

module.exports = seedDB;