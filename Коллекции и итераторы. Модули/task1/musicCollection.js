const musicCollection = {
    albums: [
        { title: "Album 1", artist: "Artist 1", year: "2001" },
        { title: "Album 2", artist: "Artist 2", year: "2002" },
        { title: "Album 3", artist: "Artist 3", year: "2003" },
    ],
    
// Реализация Symbol.iterator
    [Symbol.iterator]: function() {
        let index = 0;
        let albums = this.albums;
        return {
            next: function() {
                if (index < albums.length) {
                    return { value: albums[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

// Использование for...of для перебора альбомов
for (let album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}
