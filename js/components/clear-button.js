'use strict';
import React from 'react';
import styles from "../../public/styles";
import {
  Text,
  View,
  TouchableOpacity
} from "react-native";


function ClearButton(props) {
  // console.log('clearbutton', props)
  // const clearAllModels = this.props.clearAllModels
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        props.ClearButton()
      }}
    >
      <Text style={styles.textStyle}> clear all models </Text>
    </TouchableOpacity>
  )
}

export default ClearButton




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


