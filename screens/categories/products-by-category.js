import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
  Image
} from "react-native";
// import { sortByClassName, formatProducts } from './../../store/utility-funcs'
import { addModel, singleModel } from '../../store/actions'
import { connect } from 'react-redux'
import { Button } from "react-native-elements";


export function Item({ name, thumbnail, glb, sku, pageUrl, price, selected, handlePress, closeOverlay }) {
  const modelToBeSelected = {
    name,
    thumbnail,
    pageUrl,
    price,
    sku,
    glb,
    selected: false,
    scale: [0.5, 0.5, 0.5],
    position: [0, 0, -1],
    rotation: [0, 0, 0],
    type: "GLB",
    physics: undefined,
    ref_pointer: undefined,
    shadow_width: 3.5,
    shadow_height: 3,
    spotlight_position_y: 9.2
  }

  return (
    <TouchableOpacity
      onPress={() => {
        handlePress(modelToBeSelected)
        closeOverlay()
      }
      }
      style={
        [
          styles.item,
          { backgroundColor: selected ? "#6e3b6e" : "white" },
        ]}
    >
      <Text style={styles.title}>{name}</Text>
      <Image
        style={{ width: 150, height: 150 }}
        source={{ uri: thumbnail }}
      />
    </TouchableOpacity >
  );
}

function ProductsByCategory(props) {
  const category = props.category; //an array
  const closeOverlay = props.closeOverlay;
  console.log("inside productsbycategory", props);
  // (15)[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  const { handlePress } = props;
  return (
    <View style={styles.container}>
      <FlatList
        data={category}
        renderItem={({ item }) => (
          <Item
            name={item.product_name}
            thumbnail={item.thumbnail_image_url}
            sku={item.sku}
            glb={item.model.glb}
            pageUrl={item.product_page_url}
            price={item.sale_price}
            handlePress={handlePress}
            closeOverlay={closeOverlay}
          />
        )}
        keyExtractor={item => item.sku}
      />
    </View>
  );
}

const mapStateToProps = state => {
  return {
    models: state.models,
    selectedModel: state.selectedModel
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handlePress(model) {
      dispatch(addModel(model))
      dispatch(singleModel(model))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsByCategory);

// export default ProductsByCategory

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10
  },
  title: {
    fontSize: 20,
    color: "#563902"
  },
  loading: {
    fontSize: 40,
    color: "#563902"
  }
});
