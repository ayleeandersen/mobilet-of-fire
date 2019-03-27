/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import Favorites from './screens/Favorites';
import Search from './screens/Search';
import Detail from './screens/Detail';
import Browse from './screens/Browse';

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
      Detail: Detail,
      Browse: Browse,
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
