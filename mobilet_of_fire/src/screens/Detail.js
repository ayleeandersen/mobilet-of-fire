/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Body, Card, CardItem, ListItem, Spinner, List } from 'native-base';

import pokemonService from '../services/pokemon.service';
//import console = require('console');

export default class Detail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
        title: 'Detail',
        headerRight: 
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', padding: 10,}}>
                    <TouchableOpacity 
                        title="Favorites" 
                        style={{margin: 5, padding: 10, borderRadius: 5}} 
                        onPress={() => { navigation.push('Favorites', {from: 'from Search'}) }}
                    >
                        <Text style={{fontSize: 20}}>Favorites</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        title="Search" 
                        style={{margin: 5, padding: 10, borderRadius: 5}}
                    >
                        <Text style={{fontSize: 20}}>Search</Text>
                    </TouchableOpacity>
                </View>
    }
}

    constructor(props) {
        super(props);
        this.state = {
          pokemon: ''
        }
    }

    componentDidUpdate() {
      console.log("p", this.state.pokemon);
      console.log("Pokemon: ", this.props.navigation.getParam('pokemon'));
      if (this.props.navigation.getParam('pokemon')) {
        this._getPokemon(this.props.navigation.getParam('pokemon'));
      }
    }

    render() {
      if (this.state.pokemon == ''){
        return(
          <Spinner color='blue' />
        );
      }
        return (
          <View style={styles.detailView}>
            <Card style={styles.detailCard}>
              <CardItem header button onPress={() => alert("This is Card Header")}>
                <Text style={styles.detailHeader}>{this.state.pokemon.getName().toUpperCase()}</Text>
              </CardItem>
              <CardItem cardBody>
              <Image
                    style={{width: 200, height: 200}}
                    source={{uri: this.state.pokemon.getImage()}}
                  />
              </CardItem>
              <CardItem>
                <Body style={styles.detailCard}>
                  <ListItem>
                    <Text style={styles.detailBody}>Base Experience: {this.state.pokemon.getBaseExperience()}</Text>
                  </ListItem>
                  <Text style={styles.detailBody}>Weight: {this.state.pokemon.getWeight()} and Height: {this.state.pokemon.getHeight()}</Text>
                </Body>
              </CardItem>
            </Card>
          </View>
        );
    }

    _getPokemon(PokemonId){
      pokemonService.getPokemonDetails(PokemonId)
      .then(
        results => {
          this.setState({pokemon: results});
        })
      .catch (error => { console.log("Something wrong")})
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
  },
  detailHeader: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#4286f4',
  },
  detailBody: {
    fontSize: 20,
    paddingTop: 10,
  },
  detailCard: {
    alignItems: 'center',
  },
  detailView: {
    margin: 20,
  }
});
