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
    constructor(id, name, base_experience) {
        this.id = id;
        this.name = name;
        this.base_experience = base_experience;
        // this.height = height;
        // this.weight = weight;
    }

    getId() { return this.id; }
    getName() { return this.name; }
    getBaseExperience() { return this.base_experience; }
    // getHeight() { return this.height; }
    // getWeight() { return this.weight; }
}