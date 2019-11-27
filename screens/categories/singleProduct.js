import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'


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
function SingleProduct(props) {

  return (
    null
  )
}

export default SingleProduct;

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
