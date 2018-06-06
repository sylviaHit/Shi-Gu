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
import HomePage from './app/src/pages/home/HomePage';
import Poetry from './app/src/pages/poetry/Poetry';
import Person from './app/src/pages/person/Person';
import Road from './app/src/pages/road/Road';
import Culture from './app/src/pages/culture/Culture';
import Scene from './app/src/pages/scene/Scene';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
    {
        Home: { screen: HomePage },
        Poetry:{ screen: Poetry },
        Person: { screen: Person },
        Road: { screen: Road },
        Culture:{ screen: Culture },
        Scene: { screen: Scene }
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
