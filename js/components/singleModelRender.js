'use strict';

import React, { Component } from 'react';
import {
  ViroMaterials,
  ViroNode,
  Viro3DObject,
  ViroSpotLight,
  ViroAmbientLight,
  ViroQuad,
  ViroARPlaneSelector
} from 'react-viro';
import { connect } from "react-redux";
import { removeModel } from '../../store/actions'

class SingleModel extends Component {
  constructor() {
    super();

    this.state = {
      rotation: [0, 0, 0],
      lastClick: 0,
      doubleClickCounter: 0
    };

    this._onRotate = this._onRotate.bind(this);
    this._onClick = this._onClick.bind(this);
    this.logPosition = this.logPosition.bind(this);
  }

  // componentDidMount() {
  //   this.props.removeThisModel()
  // }

  render() {
    console.log('singleModelRender::this.props', this.props);
    const product = this.props.product;
    return (

      <ViroNode
        // key={this.props.modelIDProps.uuid}
        // ref={this._setARNodeRef}
        // visible={this.state.nodeIsVisible}
        // position={this.state.position}
        // scale={this.state.scale}
        // rotation={this.state.rotation}
        onDrag={() => { }}
        dragType="FixedToWorld">


        <ViroSpotLight
          color="#ffffff"
          attenuationStartDistance={2}
          attenuationEndDistance={10}
          position={[0, 2, 1]}
          direction={[0, 2, -1]}
          innerAngle={20}
          outerAngle={45}
        />

        <Viro3DObject
          source={{ uri: product.glb }}
          type="GLB"
          scale={[1, 1, 1]}
          position={product.position}
          rotation={this.state.rotation}
          onClick={this._onClick}
          onRotate={this._onRotate}
          onPinch={event => { console.log('pinched!: ', event) }}
        />

        <ViroAmbientLight color="#ffffff" />

      </ViroNode>


    )
  }

  // overlay
  _onClick(position, source) {
    const clickedAt = new Date;

    if (clickedAt - this.state.lastClick < 1000) {
      console.log('double click detected:', this.props.nav);
      this.props.nav.navigate('ProductDetails');     
    }
    this.setState({
      lastClick: clickedAt
    });
  }

/*    deleting
  _onClick(position, source) {
    const clickedAt = new Date;

    if (clickedAt - this.state.lastClick < 1000) {
      console.log('double click detected');
      this.setState({
        doubleClickCounter: this.state.doubleClickCounter + 1
      });
    }
    this.setState({
      lastClick: clickedAt
    });

    if (this.state.doubleClickCounter === 5) {
      const modelDoubleClicked = this.props.product
      console.log('modelDoubleClicked', modelDoubleClicked)
      this.props.removeThisModel(modelDoubleClicked)

    }
  }
*/

  _onRotate(rotateState, rotationFactor, source) {
    // console.log('before:', this.state.rotation[1]);
    console.log('rotation state', rotateState, 'triggered');
    if (rotateState === 2) {
      let yRot = this.state.rotation[1];
      let rot;

      yRot += rotationFactor / 10;
      if (yRot >= 360) {
        yRot -= 360;
      } else if (yRot < 0) {
        yRot += 360;
      }

      rot = { rotation: [0, yRot, 0] };

      this.setState(rot);
    }

    // console.log('after:', this.state.rotation[1]);
  }

  logPosition() {
    //ask andy to show how to "bind" position[x,y,z]
    console.log('log position', product.position);
  }
}

const mapStateToProps = state => {
  return {
    models: state.models,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeThisModel: (model) => dispatch(removeModel(model))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleModel);

// export default SingleModel;
