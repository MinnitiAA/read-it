import ItunesMedia from "@/models/ItunesMedia.js";

export default class Podcast extends ItunesMedia{
    static type = 'Podcast';

    get type() {
        return Podcast.type;
    }
}