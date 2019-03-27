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
import {
    Button,
} from 'native-base';


export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Home',
            headerRight: 
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', padding: 10,}}>
                        <TouchableOpacity 
                            title="Favorites" 
                            style={{margin: 5, padding: 10, borderRadius: 5}} 
                            onPress={() => { navigation.push('Favorites', {from: 'from HomeScreen'}) }}
                        >
                            <Text style={{fontSize: 20}}>Favorites</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            title="Browse" 
                            style={{margin: 5, padding: 10, borderRadius: 5}}
                            onPress={() => { navigation.push('Browse', {from: 'from HomeScreen'}) }}
                        >
                            <Text style={{fontSize: 20}}>Browse</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            title="Search" 
                            style={{margin: 5, padding: 10, borderRadius: 5}}
                            onPress={() => { navigation.push('Search', {from: 'from HomeScreen'}) }}
                        >
                            <Text style={{fontSize: 20}}>Search</Text>
                        </TouchableOpacity>
                    </View>
        }
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to The Pokémon Finder! 
                </Text>
                <Text style={styles.welcome}>
                    You can search Pokémon by name and add them to your favorites!
                </Text>
                <Image source={require('../../assets/pokeball.png')} style={{width: 150, height: 150}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
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
});
