/*
 * Class to describe a single Pokemon
    i. id
    ii. name
    iii. base_experience
    iv. height
    v. weight
    ... TO BE CONTINUED
 */

export default class PokemonSummary {
    constructor(name, url) {
        this.name = name;
        this.url = url;
        // this.height = height;
        // this.weight = weight;
    }

    getName() { return this.name; }
    getUrl() { return this.url; }
    // getHeight() { return this.height; }
    // getWeight() { return this.weight; }
}