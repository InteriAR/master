import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, Image } from 'react-native'
import axios from 'axios'

//         // (13)[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
//         // 0: {category: "Accent Chairs", productList: Array(13)}


export function Item({ category, productList, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => Alert.alert('Simple Button pressed')}
      // onPress={() => onSelect(category)}
      style={[
        styles.item,
        { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
      ]}
    >
      {productList.map(function (singleProd) {
        return (
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: 'https://secure.img1.wfcdn.com/lf/43/hash/34591/55521045/1/custom_image.jpg' }}
          />
        )
      })}
      {/* <Text style={styles.title}>{productList}</Text> */}
    </TouchableOpacity>
  );
}

function ProductByCategory(props) {
  // console.log('props', props)

  const products = props.products
  // console.log('state', state)
  const formattedProducts = Object.entries(products).map(([k, v]) => ({ category: k, productList: v }))

  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    category => {
      const newSelected = new Map(selected);
      newSelected.set(category, !selected.get(category));

      setSelected(newSelected);
    },
    [selected],
  );


  if (products.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.loading}> loading.... </Text>
      </View>
    )
  } else {
    // return (
    //   <Text style={styles.loading}>has stuff </Text>
    // )
    return (
      <View style={styles.container}>
        <FlatList
          data={formattedProducts}
          renderItem={({ item }) => (
            <Item
              category={item.category}
              productList={item.productList}
              selected={!!selected.get(item.category)}
              onSelect={onSelect}
            />)}
          keyExtractor={item => item.category}
        />
      </View>
    )
  }

}

export default ProductByCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  loading: {
    fontSize: 40,
    color: 'blue',

  }
});
