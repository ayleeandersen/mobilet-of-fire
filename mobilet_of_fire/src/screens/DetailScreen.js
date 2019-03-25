/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import {PokemonService} from '../services/pokemon.service'
import console = require('console');

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home'
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
      this._getPokemon();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    
            </Text>
                <TouchableOpacity
                    style={styles.touchableButton}
                >
                    <Text
                        style={styles.touchableButtonText}
                    >
                        Go to Screen One
            </Text>
                </TouchableOpacity>
            </View>
        );
    }

    _getPokemon(PokemonId){
      PookemonService.getPokemonDetails()
      .then(
        results => {
          console.log(results)
        }
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  touchableButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 10,
    borderRadius: 20
  },
  touchableButtonText: {
    fontSize: 20
  }
});
