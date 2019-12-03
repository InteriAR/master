'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image,
  Button,
  TextInput
} from 'react-native';

import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { singleModel, getSingleModel, getUsersCollection   } from '../../store/actions';
import {Formik} from 'formik'
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  ViroButton
} from 'react-viro';

// const initalAR = require('../../js/HelloWorldSceneAR')
import HelloWorldSceneAR from '../../js/HelloWorldSceneAR';
import { Overlay } from 'react-native-elements';
const initalAR = HelloWorldSceneAR;

const propTest = 'propTest';

class AR extends Component {
  constructor(props) {
      super(props)
      this.state = {
          // viroAppProps: { selectedModel: {} },
          appears: false,
          keyName: '',
      }
  }

  componentDidMount() {
    this.props.getSelectedModel();
    this.props.getCollection();
    // this.setState({ viroAppProps: { selectedModel: this.props.selectedModel } })
  }

  saveCollection = (keyName, usersStuff) => {
    const entry = {}
    entry.keyName = usersStuff
    this.props.getCollection(entry)
  }

  // handleChange = (input) => {
  //   this.setState({ keyName: input.target.value })
  // }

  // handleSubmit = (input) => {
  //   input.preventDefault()
  // }
  render() {
    // console.log('AR screen index', this.props)
    const selectedModel = this.props.selectedModel;
    const userCollection = this.props.getCollection;
    console.log('AR screen selected model', selectedModel);
    console.log('AR for user', userCollection)
    console.log(this.props)

    return (
      <View style={style.main}>
        <ViroARSceneNavigator
          initialScene={{ scene: initalAR }}
          // viroAppProps={this.state.viroAppProps}
          viroAppProps={{ selectedModel, userCollection }}
        />
        <View style={style.centerItems}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Categories')}
          >
            <Image
              style={style.categoryButton}
              source={require('../../js/res/AddFurniture.jpg')}
            />
          </TouchableHighlight>

          <Button title="Save Progress" onPress={() => this.setState({ appears: !this.state.appears })} />
          <Overlay
            isVisible={this.state.appears}
            onBackdropPress={() => this.setState({ appears: !this.state.appears })}
          >
            <Formik
              initialValues={{ name: '' }}
              onSubmit={ values  => {
                console.log(values)
              } }
            >
              {
                ({ handleChange, handleSubmit, values}) => (
                  <View>
                    <Text>Name your save</Text>
                    <TextInput
                        placeholder="Ex. Living Room"
                        onChangeText={handleChange('name')}
                        value={values.name}
                        />
                    <Button title="Submit" onPress={handleSubmit} />
                  </View>
                )
              }
            </Formik>
          </Overlay>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedModel: state.selectedModel,
    overlay: state.overlay,
    userCollection: state.userCollection
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSelectedModel: () => dispatch(getSingleModel()),
    getCollection: () => dispatch(getUsersCollection())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(AR));

// module.exports = withNavigation(AR);

// export default withNavigation(AR)

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
    borderWidth: 1
  },
  saveButton: {
    height: 80,
    width: 80
  },
  centerItems: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  }
});
