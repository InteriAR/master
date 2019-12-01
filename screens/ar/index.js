'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, TouchableHighlight, Text, Image } from 'react-native';
import { withNavigation } from 'react-navigation'

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
        const propTest = 'propTest'
        console.log('AR screen index', this.props)
        return (
            <View style={style.main}>
                <ViroARSceneNavigator
                    initialScene={{ scene: initalAR }}
                    viroAppProps={propTest} />
                <View style={style.centerItems}>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Categories')}>
                        <Image style={style.categoryButton} source={require('../../js/res/button.jpg')} />
                    </TouchableHighlight>
                </View>
                {/* <View style={style.centerItems}>
                    <TouchableHighlight>
                        <Image style={style.saveButton} source={require('../../js/res/button.jpg')} />
                    </TouchableHighlight>
                </View>             */}
            </View>
        )
    }
}

module.exports = withNavigation(AR);

const style = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    categoryButton: {
        height: 80,
        width: 80,
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 100,
        marginLeft: 175,
        marginBottom: 70,
        borderRadius: 10,
        borderWidth: 1,
    },
    saveButton: {
        height: 80,
        width: 80,
    },
    centerItems: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    }
})
