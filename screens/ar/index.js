'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator
} from 'react-viro';

const initalAR = require('../../js/HelloWorldSceneAR')

export default class AR extends Component {

    render() {
        return (
            <ViroARSceneNavigator initialScene={{scene: initalAR}} />
        )
    }
}

module.exports = AR;
