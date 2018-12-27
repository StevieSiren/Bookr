const mongoose = require('mongoose');

const Artist = require('../models/Artist');

var artistData = [
    {
        name: 'Flying Lotus',
        img: 'https://images.unsplash.com/photo-1487768047333-c8781e88b283?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        fans: 1367,
        description: 'Steven Ellison (born October 7, 1983), known by his stage name Flying Lotus or sometimes FlyLo, is an experimental multi-genre music producer, electronic musician, DJ, filmmaker, and rapper from Los Angeles, California.'
    },
    {
        name: 'Foy Vance',
        img: 'https://images.unsplash.com/photo-1524681606472-b50236103c66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        fans: 433,
        description: 'Foy Vance (born 1974)[1][2] is a Northern Irish musician and singer-songwriter signed to Glassnote Records in 2013. Vance has toured as a support act to British singer-songwriter Ed Sheeran and his music has been featured on numerous TV shows.'
    },
    {
        name: 'Jon Bellion',
        img: 'https://images.unsplash.com/photo-1521334726092-b509a19597c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=777&q=80',
        fans: 12456,
        description: 'Jonathan David Bellion[1] (born December 26, 1990) is an American rapper, singer, songwriter and record producer. He was born and raised in Lake Grove, New York on Long Island.[2] He is known for his single "All Time Low". Bellion has released four mixtapes and two studio albums.'
    }
];

testFavorties = [];

testId = '5c2473db06433c4178a50a33';


const getArtistById = (ID) => {
    Artist.findById(ID, (err, artist) => {
        if(err) {
            console.log(err);
        } else {
            testFavorties.push(artist);
            console.log(testFavorties[0]);
            console.log('I think I worked.');
        }
    });
}

console.log(getArtistById(testId));