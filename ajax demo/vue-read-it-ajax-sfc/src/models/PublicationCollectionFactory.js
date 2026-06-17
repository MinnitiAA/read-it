import PublicationCollection from "@/models/PublicationCollection.js";
import Book from "@/models/Book.js";
import Magazine from "@/models/Magazine.js";
import ItunesMedia from "@/models/ItunesMedia.js";
import Song from "@/models/Song.js";
import MusicVideo from "@/models/MusicVideo.js";
import TvShow from "@/models/TvShow.js";
import Audiobook from "@/models/Audiobook.js";
import Podcast from "@/models/Podcast.js";


class PublicationCollectionFactory {
    static createFromGoogleBooks(arr){
        const collection = new PublicationCollection();
        arr.forEach(media => {
            switch(media.volumeInfo.printType){
                case "BOOK":
                    collection.add(
                        Object.assign(new Book(), media)
                    );
                    break;
                case "MAGAZINE":
                    collection.add(
                        Object.assign(new Magazine(), media)
                    );
                    break;
            }
        });

        return collection;
    }

    static createFromLocalStorage(arr) {
        const collection = new PublicationCollection();

        arr.forEach(item => {
            let media;

            switch (item.type) {
                case 'song':
                    media = Object.assign(new Song(), item);
                    break;
                case 'music-video':
                    media = Object.assign(new MusicVideo(), item);
                    break;
                case 'tv-episode':
                case 'tvSeason':
                case 'tv-show':
                    media = Object.assign(new TvShow(), item);
                    break;
                case 'audiobook':
                    media = Object.assign(new Audiobook(), item);
                    break;
                case 'podcast':
                    media = Object.assign(new Podcast(), item);
                    break;
                default:
                    media = Object.assign(new ItunesMedia(), item);
                    break;
            }

            collection.add(media);
        });

        return collection;
    }

    static createFromItunes(results) {
        const collection = new PublicationCollection();

        results.forEach(item => {
            let media;

            switch (item.kind || item.wrapperType) {
                case 'song':
                    media = Object.assign(new Song(), item);
                    break;
                case 'music-video':
                    media = Object.assign(new MusicVideo(), item);
                    break;
                case 'tv-episode':
                case 'tvSeason':
                case 'tv-show':
                    media = Object.assign(new TvShow(), item);
                    break;
                case 'audiobook':
                    media = Object.assign(new Audiobook(), item);
                    break;
                case 'podcast':
                    media = Object.assign(new Podcast(), item);
                    break;
                default:
                    media = Object.assign(new ItunesMedia(), item);
                    break;
            }

            media.volumeInfo = {
                title: media.trackName || media.collectionName || 'Untitled',
                description: media.longDescription || media.description || media.shortDescription || '',
            };

            collection.add(media);
        });

        return collection;
    }
}

export default PublicationCollectionFactory;