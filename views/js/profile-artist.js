const mongoose = require('mongoose');

const Artist = require('../../models/Artist');

const saveBtn = document.querySelector('#profile-artist--savebtn');

testFavorties = [];

testId = '5c2473db06433c4178a50a33';



// const saveArtist = (artistId) => {
//     // event.preventDefault();
//     artistId = testId;
//     Artist.findById(artistId, (err, artist) => {
//         if(err) {
//             console.log(err);
//         } else {
//             testFavorties.push(artist);
//             console.log('successfully added artist by ID!');
//         }
//     });
    
// };


