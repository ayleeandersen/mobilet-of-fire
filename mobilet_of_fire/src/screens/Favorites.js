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
import {
    Button,
} from 'native-base';


export default class Favorites extends Component {
    static navigationOptions = {
        title: 'Favorites',
        headerRight: 
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', padding: 10,}}>
                    <TouchableOpacity 
                        title="Browse" 
                        style={{margin: 5, padding: 10, borderRadius: 5}} 
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

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Favorite Pokemon
                </Text>
                <TouchableOpacity
                    style={styles.touchableButton}
                    onPress={this._getSearch(this.state.text)}
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

    _getSearch(text){
        this
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
    buttonStyle: {

    },
    navButtonscontainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
});
