/*
 * Class to describe a single Pokemon
    i. id
    ii. name
    iii. base_experience
    iv. height
    v. weight
    ... TO BE CONTINUED
 */

export class PokemonDetail {
    constructor(id, name, base_experience, height, weight, front_default) {
        this.id = id;
        this.name = name;
        this.base_experience = base_experience;
        this.height = height;
        this.weight = weight;
        this.front_default = front_default;
    }

    getId() { return this.id; }
    getName() { return this.name; }
    getBaseExperience() { return this.base_experience; }
    getHeight() { return this.height; }
    getWeight() { return this.weight; }
    getImgUrl() { return this.front_default; }
}