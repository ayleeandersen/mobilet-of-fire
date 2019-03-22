//-------------------------------------------------------------------
//
// The purpose of this class is to provide a single location that the
// rest of the application can use to obtain URL routes for working with
// the backend API.
//
//-------------------------------------------------------------------
import apiService from './api.service';

let PokemonService = class PokemonService {
    constructor(){}

    getPokemonDetails(PokemonId) {
        return new Promise((resolve, reject) => {
            fetch(apiService.getPokemonDetails(PokemonId))
            .then((response) => response.json())
            .then((response) => {
                let items = [];
                // items.push(new PokemonDetail)
                // items.push(new MovieDetail(response.id, response.title, response.popularity,
                //     response.release_date, response.overview, response.poster_path, response.genres,
                //     response.budget, response.revenue, response.status));
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