import ItunesMedia from "@/models/ItunesMedia.js";

export default class MusicVideo extends ItunesMedia {
    static type = 'MusicVideo';

    get type() {
        return MusicVideo.type;
    }
}