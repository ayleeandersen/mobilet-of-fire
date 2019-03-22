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
  View,
  TextInput
} from 'react-native';
import {
    Button,
} from 'native-base';


export default class Search extends Component {
    static navigationOptions = {
        title: 'Search',
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
        this.states = {
            text: '',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Results of Your Search:
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

            </View>
        );
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
    textInput: {
        height: 50,
    },
});
