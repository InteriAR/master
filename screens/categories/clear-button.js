'use strict';
import React from 'react';
import styles from "../../public/styles";
import {
  Text,
  TouchableOpacity
} from "react-native";

import { clearAllModels } from "../../store/actions";
import { connect } from "react-redux";


function ClearButton(props) {
  const { handlePress } = props;
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        handlePress()
      }}
    >
      <Text style={styles.textStyle}> clear all models </Text>
    </TouchableOpacity>
  )
}

const mapStateToProps = state => {
  return {
    models: state.models
  };
};

const mapDispatch = dispatch => {
  return {
    handlePress() {
      dispatch(clearAllModels());
    }
  };
};

export default connect(mapStateToProps, mapDispatch)(ClearButton);




// import React, { Component } from 'react';
// import {
//   ViroButton
// } from 'react-viro';

// function DeleteButton() {
//   console.log('inside delete button', this.props)
//   const sourceImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Button-Purple.svg/1024px-Button-Purple.svg.png"
//   const button =
//     (<ViroButton
//       source={{ uri: sourceImg }}
//       position={this.props.position} />)
//   return button
// }

// export default DeleteButton;


