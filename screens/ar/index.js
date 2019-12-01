'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, TouchableHighlight, Text, Image } from 'react-native';
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { singleModel, getSingleModel } from '../../store/actions'

import {
    ViroARScene,
    ViroText,
    ViroConstants,
    ViroARSceneNavigator,
    ViroButton,
} from 'react-viro';

// const initalAR = require('../../js/HelloWorldSceneAR')
import HelloWorldSceneAR from '../../js/HelloWorldSceneAR'
const initalAR = HelloWorldSceneAR

const propTest = 'propTest'

class AR extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         viroAppProps: { selectedModel: {} },
    //     }
    // }
    componentDidMount() {
        this.props.getSelectedModel()
        // this.setState({ viroAppProps: { selectedModel: this.props.selectedModel } })
    }

    render() {
        // console.log('AR screen index', this.props)
        const selectedModel = this.props.selectedModel
        console.log('AR screen selected model', selectedModel)
        return (
            <View style={style.main}>
                <ViroARSceneNavigator
                    initialScene={{ scene: initalAR }}
                    // viroAppProps={this.state.viroAppProps}
                    viroAppProps={{ selectedModel }} />
                <View style={style.centerItems}>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Categories')}>
                        <Image style={style.categoryButton} source={require('../../js/res/button.jpg')} />
                    </TouchableHighlight>
                </View>
                {/* <View style={style.centerItems}>
                    <TouchableHighlight>
                        <Image style={style.saveButton} source={require('../../js/res/button.jpg')} />
                    </TouchableHighlight>
                </View>             */}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedModel: state.selectedModel,
        overlay: state.overlay
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSelectedModel: () => dispatch(getSingleModel())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withNavigation(AR));

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
        borderWidth: 1,
    },
    saveButton: {
        height: 80,
        width: 80,
    },
    centerItems: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    }
})
