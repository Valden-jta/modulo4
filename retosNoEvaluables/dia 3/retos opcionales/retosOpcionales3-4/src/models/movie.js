import { Professional } from "./professional.js";

export class Movie {

    title;
    releaseYear;
    actors;
    nationality;
    director;
    writer;
    languaje;
    platform;
    isMCU;
    mainCharacterName;
    producer;
    distributor;
    genre;

    constructor(title, releaseYear, nationality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors  = [];
        this.nationality = nationality;
        this.director = new Professional('',0,0,0,false,'',0,'');
        this.writer = new Professional('',0,0,0,false,'',0,'');
        this.languaje = '';
        this.platform = '';
        this.isMCU = false;
        this.mainCharacterName = '';
        this.producer = '';
        this.distributor = '';
        this.genre = genre;
    }

    showMovie() {
        return {
            title: this.title,
            releaseYear: this.releaseYear,
            actors: this.actors.map(actor => actor.name),
            nationality: this.nationality,
            director: this.director.name,
            writer: this.writer.name,
            languaje: this.languaje,
            platform: this.platform,
            isMCU: this.isMCU,
            mainCharacterName: this.mainCharacterName,
            producer: this.producer,
            distributor: this.distributor,
            genre: this.genre
        };
    }
}

