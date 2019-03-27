//-------------------------------------------------------------------
//
// The purpose of this class is to provide a single location that the
// rest of the application can use to obtain URL routes for working with
// the backend API.
//
//-------------------------------------------------------------------
import apiService from './api.service';
import { PokemonDetail } from '../models/pokemonDetail';
import { PokemonSummary } from '../models/pokemonSummary';

let PokemonService = class PokemonService {
    constructor(){}

    getPokemonDetails(PokemonId) { // constructor(id, name, base_experience, height, weight)
        return new Promise((resolve, reject) => {
            fetch(apiService.getPokemonDetails(PokemonId))
            .then((response) => response.json())
            .then((response) => {
                resolve(new PokemonDetail(response.id, response.name, response.base_experience, response.height, response.weight));
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    getAllPokemon() { // constructor(id, name, base_experience)
        return new Promise((resolve, reject) => {
            fetch(apiService.getAllPokemon())
            .then((response) => response.json())
            .then((response) => {
                let items = [];
                items.push(new PokemonSummary(response.id, response.name, response.base_experience));
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }
};

// Create a Singleton
const pokemonService = new PokemonService();
export default pokemonService;