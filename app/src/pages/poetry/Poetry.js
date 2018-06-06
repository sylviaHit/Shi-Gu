/**
 * homePage
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {};
export default class Poetry extends Component<Props> {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        let colors = ['#e2dbcb', '#dbd4c4', '#e5ddce'];
        return (
            <ImageBackground style={styles.wrap} source= {require('../../images/poetry-bg-2.jpg')}>

            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    wrap: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
