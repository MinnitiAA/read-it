import ItunesMedia from "@/models/ItunesMedia.js";

export default class TvShow extends ItunesMedia {
    static type = 'TvShow';

    get type() {
        return TvShow.type;
    }
}