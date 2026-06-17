import ItunesMedia from "@/models/ItunesMedia.js";

export default class Song extends ItunesMedia {
    static type = 'Song';

    get type() {
        return Song.type;
    }
}