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

// import product from './test-models'


class SingleModel extends Component {
  constructor() {
    super();

    this.logPosition = this.logPosition.bind(this)
  }

  render() {
    // this.logPosition()
    const product = this.props.product
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
          type={product.type}
          scale={product.scale}
          position={product.position}
          rotation={product.rotation}
        />

        <ViroAmbientLight color="#ffffff" />

      </ViroNode>


    )
  }

  logPosition() {
    //ask andy to show how to "bind" position[x,y,z]
    console.log('log position', product.position)
  }


}


export default SingleModel
