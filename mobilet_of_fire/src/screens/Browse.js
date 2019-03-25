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
import pokeService from '../services/pokemon.service';

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
        pokeService.getAllPokemon()
        .then(results => {
            this.setState({ data: results });
        })
        .catch(error => {
            console.log('Something went wrong!');
        })
      }
    
      _renderPoke() {
        return (
            <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => item.name}
            renderItem={this._renderItem}
            ListEmptyComponent={this._renderEmptyList}
            />
        );
      }

      _renderItem = ({ item }) => {
          console.log("id: " + item.getId() + " name: " + item.getName());
        return (
            <View style={styles.listItem}>
                <ListItem id = {item.getId()} name={item.getName()} pressed={this.listMovies}/>
            </View>
        );
    }

    componentDidMount() {
        this._getPoke();
    }
}
