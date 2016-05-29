interface Audio {
    play():any;
}
class Song implements Audio {
    private artist:string;
    private title:string;

    constructor(artist:string, title:string) {
        this.artist = artist;
        this.title = title;
    }

    play() {
        console.log('Playing ' + this.title + ' by ' + this.artist);
    }

    static compare(a:song, b:Song) {
        if (a.title === b.title) {
            return 0;
        }
        return a.title ? b.title ? 1 : -1;
    }
}
class Playlist {
    constructor(public songs:Audio[]) {
    }

    play() {
        var song = this.songs.pop();
        song.play();
    }
}
class RepeatingPlaylist extends Playlist {
    private songIndex = 0;

    constructor(songs:Song[]) {
        super(songs);
    }

    play() {
        this.songs[this.songIndex].play();
        this.songIndex++;
        if (this.songIndex >= this.songs.length) {
            this.songIndex = 0;
        }
    }
}