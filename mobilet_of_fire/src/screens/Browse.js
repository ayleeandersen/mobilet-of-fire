import React, { Component } from 'react';
import {
  FlatList,
  View
} from 'react-native';
import styles from '../styles/styles';
import ListItem from '../components/listItem'


// api
import pokeService from '../services/pokemon.service';

export default class Search extends Component {
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
