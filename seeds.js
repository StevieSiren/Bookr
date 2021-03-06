const mongoose = require('mongoose');

const Artist = require('./models/Artist'),
      Shows = require('./models/Shows');
    //   Fan = require('./models/Fan'),


// Seed the database to create some fake data for testing

var artistData = [
    {
        username: 'Flying Lotus',
        img: 'https://images.unsplash.com/photo-1487768047333-c8781e88b283?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        followers: 1367,
        description: 'Steven Ellison (born October 7, 1983), known by his stage name Flying Lotus or sometimes FlyLo, is an experimental multi-genre music producer, electronic musician, DJ, filmmaker, and rapper from Los Angeles, California.'
    },
    {
        usernamename: 'Foy Vance',
        img: 'https://images.unsplash.com/photo-1524681606472-b50236103c66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        followers: 433,
        description: 'Foy Vance (born 1974)[1][2] is a Northern Irish musician and singer-songwriter signed to Glassnote Records in 2013. Vance has toured as a support act to British singer-songwriter Ed Sheeran and his music has been featured on numerous TV shows.'
    },
    {
        name: 'Jon Bellion',
        img: 'https://images.unsplash.com/photo-1521334726092-b509a19597c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=777&q=80',
        followers: 12456,
        description: 'Jonathan David Bellion[1] (born December 26, 1990) is an American rapper, singer, songwriter and record producer. He was born and raised in Lake Grove, New York on Long Island.[2] He is known for his single "All Time Low". Bellion has released four mixtapes and two studio albums.'
    }
];













// async function seedShows() {
//     await Shows.remove({}, (err) => {
//         if(err) {
//             console.log(err);
//             console.log('An error occurred when trying to remove all shows from the database.');
//         } else {
//             console.log('Removed all shows!')
//         }
//     });

//     // Seed DB with dummy shows
//     showData.forEach((showSeed) => {
//         Shows.create(showSeed, (err, show) => {
//             if(err) {
//                 console.log(err);
//                 console.log('There was an error when trying to add dummy shows to the database.');
//             } else {
//                 console.log('New show added to the DB!');
//             }
//         });
//     });
// }

// function seedArtists() {
// // Remove all artists
// Artist.remove({}, (err) => {
//     if(err) {
//         console.log('There was an error!');
//         console.log(err);
//     } else {
//         console.log('Removed all Artists');
//     }
// });

// // Add some artists
// artistData.forEach((artistSeed) => {
//     Artist.create(artistSeed, (err, artist) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log('New artists added to DB');
//         }
//     });
// });
// }

// // GET RANDOM ARTIST
// function getRandomArtist() {
//     return artistData[Math.floor(Math.random() * artistData.length)];
// }

// function seedFans() {
//     // Remove all fans
//     Fan.remove({}, (err) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log('All fans removed');
//         }
//     });

//     // Create new fans & saved artists
//     fanData.forEach((fanSeed) => {
//         Fan.create(fanSeed, (err, fan) => {
//             if(err) {
//                 console.log(err);
//             } else {
//                 console.log('New fan added.');
//                 var randomArtist = getRandomArtist();
//                 fan.savedArtists.push(randomArtist);
//                 fan.save();
//                 console.log('Saved new artist!');
//             }
//         });
//     });
// }

// function seedDB() {
    
//     // SEED ARTISTS
//     seedArtists();

//     // Seed shows
//     seedShows();

//     // Seed Fans
//     // seedFans();
 
// };

// module.exports = seedDB;