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
  View,
  TextInput
} from 'react-native';
import {
    Button,
    Icon,
    Input,
    Item,
} from 'native-base';

import styles from '../styles/styles';


export default class Search extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
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
                            title="Browse" 
                            style={{margin: 5, padding: 10, borderRadius: 5}}
                            onPress={() => { navigation.push('Browse', {from: 'from Search'}) }}
                        >
                            <Text style={{fontSize: 20}}>Browse</Text>
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
<<<<<<< HEAD
        this.states = {
            text: '',
=======

        this.state = {
            pokeSearch: "",
>>>>>>> 7c823057ca3d94cd58ed045b50957b97f673d989
        }
    }

    render() {
        return (
<<<<<<< HEAD
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Search
            </Text>
            <TextInput style={styles.textInput}></TextInput>
                <TouchableOpacity
                    style={styles.touchableButton}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                >
                    <Text
                        style={styles.touchableButtonText}
                    >
                        Search
            </Text>
                </TouchableOpacity>

=======
            <View style={styles.search}>
                <Item style={styles.searchText}>
                    <Input 
                        placeholder={'Ditto'}
                        onChangeText={(val) => this.setState({pokeSearch: val})}
                        value={this.state.pokeSearch}
                    />
                </Item>
                <Button transparent
                    style={styles.navButton} 
                    // onPress={() => alert(this.props.navigation.push('Detail', {from: 'from Search', pokemon: this.state.pokeSearch}))}
                    onPress={() => alert("Navigate to Detail Page")}
                >
                    <Image source={require('../../assets/point.png')} style={{width: 50, height: 50}} />
                </Button>
>>>>>>> 7c823057ca3d94cd58ed045b50957b97f673d989
            </View>
        );
    }
}
<<<<<<< HEAD

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
    buttonStyle: {

    },
    navButtonscontainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    textInput: {
        height: 50,
    },
});
=======
>>>>>>> 7c823057ca3d94cd58ed045b50957b97f673d989
