class Song {
    private artist:string;
    private title:string;

    constructor(artist:string, title:string) {
        this.artist = artist;
        this.title = title;
    }

    play() {
        console.log('Playing ' + this.title + ' by ' + this.artist);
    }
}
class Jukebox {
    constructor(private songs:Song[]) {
    }

    play() {
        var song = this.getRandomSong();
        song.play();
    }

    private getRandomSong() {
        var songCount = this.songs.length;
        var songIndex = Math.floor(Math.random() * songCount);
        return this.songs[songIndex];
    }
}
class Playlist {
    private songs:Song[] = [];
    static macSongCount:number = 30;

    constructor(public name:string) {
    }

    addSong(song:Song) {
        if (this.songs.length >= Playlist.macSongCount) {
            throw new Error('Playlist is full')
        }
        this.songs.push(song);
    }
}

var songs = [
    new Song('Bushbaby', 'Megaphone'),
    new Song('Delays', 'One More Lie In'),
    new Song('Goober Gun', 'Stereo'),
    new Song('Sohnee', 'Shatter'),
    new Song('Get Amped', 'Celebrity')
];

var jukebox = new Jukebox(songs);
jukebox.play();

var playlist = new Playlist('My Playlist');
var name = playlist.name;
playlist.addSong(new Song('Therapy?', 'Crooked Timber'));
var maxSongs = playlist.maxSongCount;
