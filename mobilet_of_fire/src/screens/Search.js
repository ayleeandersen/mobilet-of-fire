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
    Icon,
    Item,
    Input,
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

        this.state = {
            pokeSearch: "",
        }
    }

    render() {
        return (
            <View style={styles.search}>
                <Item style={styles.searchText}>
                    <Input 
                        placeholder={'Ditto'}
                        onChangeText={(val) => this.setState({pokeSearch: val})}
                        value={this.state.pokeSearch}
                    />
                </Item>
                <Button success
                    style={styles.navButton} 
                    onPress={() => alert(this.state.pokeSearch)}
                >
                    <Icon type="FontAwesome" name="home" />
                </Button>
            </View>
        );
    }
}
