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


