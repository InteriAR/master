import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Overlay } from 'react-native-elements';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: true
    };
    this.closeOverlay = this.closeOverlay.bind(this);
  }

  closeOverlay() {
    this.setState({
      isVisible: false
    });
    this.props.navigation.navigate('AR');
  }

  componentDidMount() {
    console.log('productDetails::componentDidMount::this.props:', this.props);
  }

  render() {
    console.log('screens/productDetails::this.props:', this.props);
    const m = this.props.examinedModel;

    return (
      <Overlay
        isVisible={this.state.isVisible}
        transparent={true}
        onBackdropPress={this.closeOverlay}
      >
        <Text>
          Name: {m.name + '\n'}
        </Text>
        <Image
          style={{width: 150, height: 150}}
          source={{ uri: m.thumbnail }}
        />
        <Text>
          Price: {m.price + '\n'}
          SKU: {m.sku}
        </Text>
      </Overlay>
    );
  }
}

const mapStateToProps = state => {
  return {
    examinedModel: state.examinedModel
  };
};

export default connect(mapStateToProps, null)(ProductDetails);
