'use strict';

import React, { Component } from 'react';


import { StyleSheet, Button, View, TouchableHighlight } from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  Viro3DObject,
  ViroSpotLight,
  ViroAmbientLight,
  ViroButton,
  ViroNode,
  ViroARPlane,
  ViroARPlaneSelector,
} from 'react-viro';

class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    console.log('props inside helloAR', this.props)
    const currModelGlb = this.props.arSceneNavigator.viroAppProps.selectedModel.model
    console.log('currModel', currModelGlb)
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroARPlaneSelector
          minHeight={0.5}
          minWidth={0.5}
          alignment="Horizontal"
        >
          <ViroNode
            dragType="FixedToWorld"
            onDrag={() => { }}
          >
            <ViroSpotLight
              color="#ffffff"
              attenuationStartDistance={2}
              attenuationEndDistance={10}
              position={[0, 2, 1]}
              direction={[0, 2, -1]}
              innerAngle={20}
              outerAngle={45}
            />

            <ViroAmbientLight color="#ffffff" />

            <Viro3DObject
              source={{ uri: currModelGlb }}
              type="GLB"
              scale={[1.3, 1.3, 1.3]}
              position={[0, 0, -1]}
              rotation={[0, 0, 0]}
              onHover={this._onHover}
            />
          </ViroNode>
        </ViroARPlaneSelector>
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "Hello World!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  _onHover(isHovering, position, source) {
    console.log('Hovering fired');
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

// module.exports = HelloWorldSceneAR;

export default HelloWorldSceneAR
