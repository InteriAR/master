import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, Image } from 'react-native'
import { sortByClassName, formatProducts } from './../../store/utility-funcs'
import { singleCategory } from '../../store/actions'
// import { Link } from 'react-router-dom';
// import { removeStudentThunk } from '../store'
import { connect } from 'react-redux'

export function Item({ name, thumbnail, model, selected }) {
  return (
    <TouchableOpacity
      // onPress={() => handlePress(productList)}
      onPress={() => console.log(model)}
      // onPress={() => Alert.alert('Simple Button pressed')}
      // onPress={() => onSelect(category)}
      style={[
        styles.item,
        { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
      ]}
    >
      <Text style={styles.title}>{name}</Text>
      <Image
        style={{ width: 150, height: 150 }}
        source={{ uri: thumbnail }}
      />
      {/* <Text style={styles.title}>{productList}</Text> */}
    </TouchableOpacity>
  );
}

function ProductsByCategory(props) {
  const category = props.category //an array
  console.log('inside productsbycategory', category)
  // (15)[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  return (
    // <View style={styles.container}>
    //   <Text style={styles.loading}> inside ProductsByCategory </Text>
    // </View>
    <View style={styles.container}>
      <FlatList
        // contentContainerStyle={styles.container}
        // numColumns={2}
        data={category}
        renderItem={({ item }) => (
          <Item
            name={item.product_name}
            thumbnail={item.thumbnail_image_url}
            model={item.model.glb}
          // handlePress={handlePress}

          />)}
        keyExtractor={item => item.sku}
      />
    </View>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  loading: {
    fontSize: 40,
    color: 'blue',

  },

});
