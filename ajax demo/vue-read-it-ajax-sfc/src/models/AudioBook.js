import ItunesMedia from "@/models/ItunesMedia.js";

export default class Audiobook extends ItunesMedia {
    static type = 'Audiobook';

    get type() {
        return Audiobook.type;
    }
}