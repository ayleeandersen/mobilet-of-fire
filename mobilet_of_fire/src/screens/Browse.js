import React, { Component } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import styles from '../styles/styles';
import ListItem from '../components/listItem'

// api
import pokemonService from '../services/pokemon.service';

export default class Browse extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: 
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', padding: 10,}}>
                <TouchableOpacity 
                    title="Favorites" 
                    style={{margin: 5, padding: 10, borderRadius: 5}} 
                    onPress={() => { navigation.push('Favorites', {from: 'from Browse'}) }}
                >
                    <Text style={{fontSize: 20}}>Favorites</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                        title="Browse" 
                        style={{margin: 5, padding: 10, borderRadius: 5}}
                    >
                        <Text style={{fontSize: 20}}>Browse</Text>
                    </TouchableOpacity>
                <TouchableOpacity 
                    title="Search" 
                    style={{margin: 5, padding: 10, borderRadius: 5}}
                    onPress={() => { navigation.push('Search', {from: 'from Browse'}) }}
                >
                    <Text style={{fontSize: 20}}>Search</Text>
                </TouchableOpacity>
            </View>
        }
    }

    constructor(props) {
        super(props);
        
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this._renderPoke()}  
            </View>
        );
    }

    _getPoke() {
        pokemonService.getAllPokemon()
        .then(results => {
            this.setState({ data: results });
            console.log(this.state.data)
        })
        .catch(error => {
            console.log(error + ' Something went wrong!');
        })
      }
    
      _renderPoke() {
        return (
            <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => (item.name + Math.random().toString())}
            renderItem={this._renderItem}
            ListEmptyComponent={this._renderEmptyList}
            />
        );
      }

      _renderItem = ({ item }) => {
        return (
            <View style={styles.listItem}>
                <ListItem url={item.url} name={item.getName()} pressed={(pokeID) => this.props.navigation.navigate('Detail', {from: 'from Browse', pokemon: pokeID})}/>
            </View>
        );
    }

    componentDidMount() {
        this._getPoke();
    }
}
