/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';
import App from './app/index';

export default class ShiGu extends Component {
    render() {
        return (
            <App/>
        );
    }
}

AppRegistry.registerComponent('ShiGu', () => ShiGu);
