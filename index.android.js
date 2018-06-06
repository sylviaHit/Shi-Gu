/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import BaiduMapDemo from './app/src/BaiduMapDemo';
import HomePage from './app/src/pages/home/HomePage';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
    {
        Home: { screen: HomePage },
        // Poetry:{ screen: Poetry },
        // Person: { screen: Person },
        // Road: { screen: Road },
        // Culture:{ screen: Culture },
        // Scene: { screen: Scene }
    },
    {
        initialRouteName: 'Home',
        mode: 'modal',
        headerMode: 'none',
    }
);

export default class ShiGu extends Component {
  render() {
    return (
      <RootStack/>
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
});

AppRegistry.registerComponent('ShiGu', () => ShiGu);
