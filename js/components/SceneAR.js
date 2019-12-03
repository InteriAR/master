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

import SingleModel from './singleModelRender'
import testModel from './test-models'


class SceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
    this.renderModels = this.renderModels.bind(this)
  }

  render() {
    console.log('inside SceneAR', this.props)
    const selectedModel = this.props.arSceneNavigator.viroAppProps.selectedModel
    let modelToRender = this.renderSelectedModel(selectedModel)
    console.log('sceneAR inside render', selectedModel)
    // let models = this.renderModels()
    // console.log('sceneAR inside render', models)
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >

        <ViroAmbientLight color="#ffffff" />

        <ViroSpotLight
          innerAngle={5}
          outerAngle={90}
          direction={[0, 1, 0]}
          position={[0, -7, 0]}
          color="#ffffff"
          intensity={250} />

        <ViroARPlaneSelector onPlaneSelected={() => console.log('planeselected')}>
          {modelToRender}
        </ViroARPlaneSelector>

      </ViroARScene >
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

  renderSelectedModel(selected) {
    let renderedSelectedModel = <SingleModel product={selected} />
    return renderedSelectedModel
  }

  renderModels() {
    let renderedModels = []

    if (testModel) {
      const root = this
      testModel.forEach(function (currProduct) {
        renderedModels.push(
          <SingleModel
            key={currProduct.name}
            testModel={currProduct}
          // hitTestMethod={root._performARHitTest} //would like to get this to work
          />
        )
      })
    }
    return renderedModels
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

export default SceneAR
