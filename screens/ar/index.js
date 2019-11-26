'use strict';

import React, { Component } from 'react';

import {StyleSheet, View, TouchableHighlight, Text, Image} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  ViroButton,
} from 'react-viro';

const initalAR = require('../../js/HelloWorldSceneAR')

export default class AR extends Component {

    render() {
        return (
            <View style={{ flex: 1}}>
                <ViroARSceneNavigator initialScene={{scene: initalAR}} />
                <View style={{position: 'absolute', alignItems: 'center'}}>
                    <TouchableHighlight>
                        <Image style={style.button} source={require('../../js/res/button.jpg')} />
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

module.exports = AR;

const style = StyleSheet.create({
    button: {
        height: 80,
        width: 80,
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 200,
        marginBottom: 200,
        borderRadius: 10,
        borderWidth: 1,
    }
})