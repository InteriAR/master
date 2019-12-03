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
import { selectedModelReducer } from '../../store/reducers';

// let state = {
//   text: "Initializing AR...",
//   modelsRendered: [],
//   selectedModel: {}
// };

class SceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR..."
    };
    // this.state = state

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
    this.renderModels = this.renderModels.bind(this)
    this.renderSelectedModel = this.renderSelectedModel.bind(this)
  }

  // componentDidMount() {
  //   console.log('inside component did mount', this.props)
  //   const selectedModel = this.props.arSceneNavigator.viroAppProps.selectedModel
  //   let modelToRender = this.renderSelectedModel(selectedModel)
  //   this.setState(prevState => ({
  //     modelsRendered: [...prevState.modelsRendered, modelToRender],
  //     selectedModel: modelToRender
  //   }))
  //   console.log('this.state', this.state)
  // }

  // componentWillUnmount() {
  //   // Remember state for the next mount
  //   state = this.state;
  // }

  render() {
    console.log('inside SceneAR', this.props)

    const selectedModel = this.props.arSceneNavigator.viroAppProps.selectedModel
    // const models = this.props.arSceneNavigator.viroAppProps.selectedModel
    console.log('sceneAR inside render', selectedModel)

    if (selectedModel.sku === undefined) {
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


        </ViroARScene >
      );
    } else {
      console.log('else sceneAR inside render', this.state, this.props)
      const prevModels = this.props.arSceneNavigator.viroAppProps.models
      let models = this.renderModels(prevModels)

      let modelToRender = this.renderSelectedModel(selectedModel) //can set position on this
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
            {models}
          </ViroARPlaneSelector>

        </ViroARScene >
      );

    }
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

  renderModels(prevModels) {
    let renderedModels = []
    if (prevModels) {
      const root = this
      prevModels.forEach(function (product) {
        renderedModels.push(
          <SingleModel
            key={product.sku}
            product={product}
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