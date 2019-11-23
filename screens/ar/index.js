import React, { Component } from 'react';

import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
} from 'react-native';

import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator
} from 'react-viro';

const scene = require('../../js/HelloWorldSceneAR')

export default class AR extends React.Component {
    constructor() {
        super()
    }

    render() {
        console.log('Navigation works')
        console.log(this)
        return (
            <View style={ styles.container }>
                <Text>Hi</Text>
                <ViroARSceneNavigator {...this.state} initialScene={{scene: scene}} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})