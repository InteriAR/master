import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { Overlay } from "react-native-elements";
import { connect } from "react-redux";
import { loadModelsThunk, clearCategory } from "../../store/actions";
import CategoryMenu from "./category-menu";
import ProductsByCategory from "./products-by-category";

class Categories extends React.Component {
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
    this.props.navigation.navigate("AR");
    this.props.clearSingleCategory();
  }

  componentDidMount() {
    this.props.getModels();
  }

  render() {
    console.log("this props inside categories", this.props);
    const products = this.props.products;
    const category = this.props.category;

    if (category.length === 0) {
      return (
        <Overlay
          isVisible={this.state.isVisible}
          transparent={true}
          onBackdropPress={() => {
            this.setState({ isVisible: false });
            this.props.navigation.navigate("AR");
          }}
        >
          <CategoryMenu products={products} />
        </Overlay>
      );
    } else {
      return (
        <Overlay
          isVisible={this.state.isVisible}
          transparent={true}
          onBackdropPress={() => {
            this.setState({ isVisible: false });
            this.props.navigation.navigate("AR");
            this.props.clearSingleCategory();
          }}
        >
          {/* <Text>category exists!</Text> */}
          <ProductsByCategory
            category={category}
            closeOverlay={this.closeOverlay}
          />
        </Overlay>
      );
    }
  }
}

const mapStateToProps = state => {
  console.log("categories state", state);
  return {
    products: state.products,
    category: state.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getModels: () => dispatch(loadModelsThunk()),
    clearSingleCategory: () => dispatch(clearCategory())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  },
  loading: {
    fontSize: 40,
    color: "blue"
  }
});
