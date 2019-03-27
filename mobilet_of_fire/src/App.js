/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import Favorites from './screens/Favorites';
import Search from './screens/Search';
import Detail from './screens/Detail';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <AppContainer />
    );
  }
}

const Root = createStackNavigator(
  {
      Home: HomeScreen,
      Favorites: Favorites,
      Search: Search,
      Detail: Detail,
  },
  {
      initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(Root);

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
});
