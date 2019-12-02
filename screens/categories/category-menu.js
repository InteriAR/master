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

import { sortByClassName, formatProducts } from "./../../store/utility-funcs";
import { singleCategory } from "../../store/actions";
// import { Link } from 'react-router-dom';
// import { removeStudentThunk } from '../store'
import { connect } from "react-redux";

export function Item({
  category,
  productList,
  selected,
  onSelect,
  handlePress
}) {
  return (
    <Button
      title={category}
      buttonStyle={{ backgroundColor: "#9f8a61" }}
      onPress={() => handlePress(productList)}
      // onPress={() => Alert.alert('Simple Button pressed')}
      // onPress={() => onSelect(category)}
      style={[
        styles.item,
        { backgroundColor: selected ? "#6e3b6e" : "#f9c2ff" }
      ]}
    />
    // <Text style={styles.title}>{category}</Text>
    // {/* <Text style={styles.title}>{productList}</Text> */}
    // {/* </TouchableOpacity> */}
  );
}

function CategoryMenu(props) {
  // console.log('props inside categoryMenu', props)
  const products = props.products;
  const formattedProducts = formatProducts(products);
  // console.log('formattedProducts', formattedProducts)
  // const categories = Object.keys(products)
  // console.log('categories', categories)
  const { handlePress } = props;

  // const [selected, setSelected] = React.useState(new Map());

  // const onSelect = React.useCallback(
  //   category => {
  //     const newSelected = new Map(selected);
  //     newSelected.set(category, !selected.get(category));

  //     setSelected(newSelected);
  //   },
  //   [selected],
  // );

  if (formattedProducts.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.loading}> loading.... </Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          data={formattedProducts}
          renderItem={({ item }) => (
            <Item
              category={item.category}
              productList={item.productList}
              handlePress={handlePress}
              // selected={!!selected.get(item.category)}
              // onSelect={onSelect}
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

// const mapDispatchToProps = dispatch => {
//   return {
//     selectCategory: category => dispatch(singleCategory(category))
//   };
// }

export default connect(mapStateToProps, mapDispatch)(CategoryMenu);

// export default CategoryMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    marginVertical: 20,
    marginHorizontal: 8
  },
  title: {
    fontSize: 32,
    color: "white",
    backgroundColor: "#9f8a61"
  },
  loading: {
    fontSize: 40,
    color: "#563902"
  }
});
