export class Pokemon {
    id;         
    name;       
    types;       // types{ ---> funcion pokemTypes } 
    abilities;  // abilities{ ---> funcion pokeAbilities } 
    stats;      // stats{ { ---> funcion pokeStats }, height, weight }      
    species;    // species{ color ---> funcion pokeColor , evolution chain { ---> evolution pokeChain}}
    picture;    // string
    url;        // string
    
    constructor (id, name, type, abilities, stats, species, picture, url) {
        this.id = id;
        this.name = name;
        this.types = type;
        this.abilities = abilities;
        this.stats = stats;
        this.species = species;
        this.picture = picture;
        this.url = url;
    }
}

