import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Overlay } from 'react-native-elements';
import styles from '../../public/styles';

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

  render() {
    console.log('screens/productDetails::this.props:', this.props);
    const m = this.props.examinedModel;

    return (
      <Overlay
        isVisible={this.state.isVisible}
        transparent={true}
        onBackdropPress={this.closeOverlay}
        style={[
          styles.singleProductItem,
          { backgroundColor: '#6e3b6e' }
        ]}
      >
        <Text styles={styles.singleProductTitle}>
          Name: {m.name + '\n'}
        </Text>
        <Image
          style={styles.singleProduct}
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
