let ApiService = class ApiService {
	constructor() {
		// this.apiProtocol = 'https:';
		// this.apiHost = 'facebook.github.io/react-native';
		this.apiProtocol = 'https://';
		this.apiHost = 'pokeapi.co/api/v2';
		}
		
		// https://pokeapi.co/api/v2/pokemon/?limit=964

    get apiLocation() {
		return `${this.apiProtocol}//${this.apiHost}`;
	}
    
    getPokemonDetails(pokemonId) {
		console.log("api-service-pokeId: " + pokemonId);
		return `${this.apiLocation}/pokemon/${pokemonId}`;
    }
    
    getAllPokemon() {
        console.log("getting all pokemon");
        return `${this.apiLocation}/pokemon/?limit=964`
		}
};

// Create a Singleton
const apiService = new ApiService();
export default apiService;