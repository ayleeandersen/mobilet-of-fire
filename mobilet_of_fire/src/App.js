/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createAppContainer, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import Favorites from './screens/Favorites';
import Search from './screens/Search';
<<<<<<< HEAD
import Detail from './screens/Detail';
=======
import Browse from './screens/Browse';
>>>>>>> 7c823057ca3d94cd58ed045b50957b97f673d989

type Props = {};
export default class App extends Component<Props> {
  render() {
    console.disableYellowBox = true;
    return (
        <AppContainer />
    );
  }
}

const Root = createMaterialTopTabNavigator(
  {
      Home: HomeScreen,
      // Favorites: Favorites,
      Search: Search,
<<<<<<< HEAD
      Detail: Detail,
=======
      Browse: Browse,
>>>>>>> 7c823057ca3d94cd58ed045b50957b97f673d989
  },
  {
      initialRouteName: 'Home',
      tabBarOptions: {
        style: {
          backgroundColor: '#4b76f4', // Makes Android tab bar white instead of standard blue
        },
        indicatorStyle: {
          backgroundColor: '#f44a4a',
        }
    },
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
