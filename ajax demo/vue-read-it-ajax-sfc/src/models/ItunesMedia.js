export default class ItunesMedia {
    static type = 'ItunesMedia';

    get type() {
        return ItunesMedia.type;
    }

    id = '';
    kind = '';
    wrapperType = '';
    artistName = '';
    collectionName = '';
    trackName = '';
    artworkUrl100 = '';
    description = '';
    longDescription = '';
    shortDescription = '';
    releaseDate = '';
    primaryGenreName = '';
    collectionPrice = '';
    trackPrice = '';
    currency = '';
    previewUrl = '';

    volumeInfo = {
        title: '',
        description: '',
    }



    get thumbnail() {
    return this.artworkUrl100 || 'https://placehold.co/100x100';
    }

    get creator() {
    return this.artistName || 'Unknown';
    }

    get displayTitle() {
    return this.trackName || this.collectionName || 'Untitled';
    }

    get displayDescription() {
    return this.longDescription || this.description || this.shortDescription || '';
    }

}