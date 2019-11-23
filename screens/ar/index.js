// import React, { Component } from 'react';

// import {
//   AppRegistry,
//   Text,
//   View,
//   StyleSheet,
//   PixelRatio,
//   TouchableHighlight,
// } from 'react-native';

// import {
//     ViroARScene,
//     ViroText,
//     ViroConstants,
//   } from 'react-viro';

// const initalAR = require('../../js/HelloWorldSceneAR')

// export default class AR extends React.Component {
//     constructor() {
//         super()
//     }

//     render() {
//         console.log('Navigation works')
//         console.log(this)
//         return (
//             <ViroARScene>

//             </ViroARScene>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 2,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// })

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
