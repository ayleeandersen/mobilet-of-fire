import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  ImageBackground,
  View
} from 'react-native';
import styles from '../styles/styles';
import Button from '../components/listButton'


// api
import genreService from '../services/genreService';

export default class Search extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: []
        }
    }

    /*** Mounting ***/
    componentWillMount() {
        //console.log('Browse: componentWillMount');
    }

    render() {
        let pic = require('../resources/background.png')
        return (
            <View style={styles.container}>
                {this._renderPoke()}  
            </View>
        );
    }

    _getPoke() {
        genreService.getPoke()
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
            <Button style={styles.buttonFont} id = {item.getId()} name={item.getName()} pressed={this.listMovies}/>
            </View>
        );
    }

    componentDidMount() {
        this._getGenres();
    }

    listMovies = (id, name) => {
        this.props.navigation.navigate('MovieList', {
                genreId: id,
                genreName: name
            }
        )
    }
}
