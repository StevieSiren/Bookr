class Artist {
    constructor(name, imgSource, id)  {
        this.name = name;
        this.imgSource = imgSource;
        this.id = id;
    }
}

flyingLotus = new Artist('Flying Lotus', '/img/artist1.jpg', 'sdfkl56');
foyVance = new Artist('Foy Vance', '/img/artist2.jpg', 'lskdfn');

artists = [flyingLotus, foyVance];
foundId = 'sdfkl56';

artists.forEach((artist) => {
    if(artist.id === foundId) {
        console.log(artist.name);
    }
});