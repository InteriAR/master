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

class SingleModel extends Component {
  constructor() {
    super();

    this.state = {
      rotation: [0, 0, 0]
    };

    this._onRotate = this._onRotate.bind(this);
    this.logPosition = this.logPosition.bind(this);
  }

  render() {
    // this.logPosition()
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
          rel={component => this._viro3DObject = component}
          source={{ uri: product.glb }}
          type="GLB"
          scale={[1, 1, 1]}
          position={product.position}
          rotation={this.state.rotation}
          onRotate={this._onRotate}
        />

        <ViroAmbientLight color="#ffffff" />

      </ViroNode>


    )
  }

  _onRotate(rotateState, rotationFactor, source) {
    // console.log('before:', this.state.rotation[1]);
    if (rotateState === 2) {
      console.log('rotation state', rotateState, 'triggered');
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


export default SingleModel;
