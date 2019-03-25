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

import ListItem from '../components/listItem'


export default class Favorites extends Component {
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
    }

    render() {
        return (
            <View style={styles.container}>
                <ListItem></ListItem>
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
});
