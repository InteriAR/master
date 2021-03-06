'use strict';

import React, { Component } from 'react';

// import styles from "../../public/styles";

import { StyleSheet, Button, View, TouchableHighlight, Text } from 'react-native';

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

import { connect } from "react-redux";
import { allModels, getSingleModel } from '../../store/actions'

import SingleModel from './singleModelRender'

class SceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR...",
      planeSelected: false
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
    this.renderModels = this.renderModels.bind(this)
    this.renderSelectedModel = this.renderSelectedModel.bind(this)
    this.renderScanning = this.renderScanning.bind(this)
  }

  componentDidMount() {
    this.props.getSelectedModel();
    this.props.getAllModels();
  }

  render() {
    // console.log('inside SceneAR', this.props)

    const selectedModel = this.props.selectedModel
    // const models = this.props.arSceneNavigator.viroAppProps.selectedModel
    // console.log('sceneAR inside render', selectedModel)

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
      const prevModels = this.props.models
      let models = this.renderModels(prevModels)
      const scanningPrompt = this.renderScanning()
      // let modelToRender = this.renderSelectedModel(selectedModel) //can set position on this
      console.log('sceneAR inside render', models)
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


          {scanningPrompt}

          <ViroARPlaneSelector onPlaneSelected={() => {
            console.log('planeselected')
            this.setState({ planeSelected: true })
          }}>
            {/* {modelToRender} */}
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
  renderScanning() {
    const scanningPromptText = (
      <ViroText
        text="scan room for surface"
        textAlign="center"
        textAlignVertical="top"
        width={2} height={2}
        style={{ fontFamily: "Arial", fontSize: 20, fontWeight: "400", fontStyle: "italic", color: "#ffffff" }}
        position={[0, -1, -3]}
        visible={!this.state.planeSelected}
      />
    )
    return scanningPromptText;
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
  }
});

const mapStateToProps = state => {
  return {
    models: state.models,
    selectedModel: state.selectedModel
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSelectedModel: () => dispatch(getSingleModel()),
    getAllModels: () => dispatch(allModels())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SceneAR);
// export default SceneAR
