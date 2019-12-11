import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
    this.props.getModels();
  }

  render() {
    console.log('screens/productDetails::this.props:', this.props);

    return (
      <Overlay
        isVisible={this.state.isVisible}
        transparent={true}
        onBackdropPress={this.closeOverlay}
      >
        <Text>
          Hello World
        </Text>
      </Overlay>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getModels: () => dispatch(allModels())
  };
};

export default connect(null, mapDispatchToProps)(ProductDetails);
