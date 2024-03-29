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
import { Button } from "react-native-elements";
import ClearButton from './clear-button'
import { sortByClassName, formatProducts } from "./../../store/utility-funcs";
import { singleCategory } from "../../store/actions";

import { connect } from "react-redux";
import styles from "../../public/styles";

export function Item({ category, productList, selected, handlePress }) {
  return (
    <Button
      title={category}
      buttonStyle={{ backgroundColor: "#9f8a61" }}
      onPress={() => handlePress(productList)}
      style={[
        styles.item,
        { backgroundColor: selected ? "#6e3b6e" : "#f9c2ff" }
      ]}
    />
  );
}

function CategoryMenu(props) {
  const products = props.products;
  const formattedProducts = formatProducts(products);
  const { handlePress } = props;

  if (formattedProducts.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.loading}> loading.... </Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ClearButton />
        <FlatList
          data={formattedProducts}
          renderItem={({ item }) => (
            <Item
              category={item.category}
              productList={item.productList}
              handlePress={handlePress}
            />
          )}
          keyExtractor={item => item.category}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    category: state.category
  };
};

const mapDispatch = dispatch => {
  return {
    handlePress(category) {
      dispatch(singleCategory(category));
    }
  };
};

export default connect(mapStateToProps, mapDispatch)(CategoryMenu);
