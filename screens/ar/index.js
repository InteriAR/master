"use strict";

import React, { Component } from "react";

import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image
} from "react-native";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { getSingleModel, allModels } from "../../store/actions";

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  ViroButton
} from "react-viro";

// const initalAR = require('../../js/HelloWorldSceneAR')
// import HelloWorldSceneAR from "../../js/HelloWorldSceneAR";
// const initalAR = HelloWorldSceneAR;
import SceneAR from "../../js/components/SceneAR";

class AR extends Component {
  componentDidMount() {
    this.props.getSelectedModel();
    this.props.getAllModels();
    // this.setState({ viroAppProps: { selectedModel: this.props.selectedModel } })
  }

  render() {
    console.log("AR screen index models", this.props.models);
    const selectedModel = this.props.selectedModel;
    const models = this.props.models;
    console.log("AR screen selected model", selectedModel);
    return (
      <View style={style.main}>
        <ViroARSceneNavigator
          initialScene={{ scene: SceneAR }}
          viroAppProps={{ selectedModel, models }}
        />
        <View style={style.centerItems}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("Categories")}
          >
            <Image
              style={style.categoryButton}
              source={require("../../js/res/AddFurniture.jpg")}
            />
          </TouchableHighlight>
        </View>
        {/* <View style={style.centerItems}>
                    <TouchableHighlight>
                        <Image style={style.saveButton} source={require('../../js/res/button.jpg')} />
                    </TouchableHighlight>
                </View>             */}
      </View>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(AR));

const style = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end"
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
    borderWidth: 1
  },
  saveButton: {
    height: 80,
    width: 80
  },
  centerItems: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute"
  }
});
