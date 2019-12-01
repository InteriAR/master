import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, Image } from 'react-native'
// import { sortByClassName, formatProducts } from './../../store/utility-funcs'
import { addModel, singleModel } from '../../store/actions'
// import { Link } from 'react-router-dom';
// import { removeStudentThunk } from '../store'
import { connect } from 'react-redux'



export function Item({ name, thumbnail, model, sku, pageUrl, price, selected, handlePress, closeOverlay }) {
  return (
    <TouchableOpacity
      onPress={() => {
        handlePress(name, model)
        closeOverlay()
      }}
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
    </TouchableOpacity>
  );
}

function ProductsByCategory(props) {
  const category = props.category //an array
  const closeOverlay = props.closeOverlay
  console.log('inside productsbycategory', props)
  // (15)[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  const { handlePress } = props
  return (
    <View style={styles.container}>
      <FlatList
        data={category}
        renderItem={({ item }) => (
          <Item
            name={item.product_name}
            thumbnail={item.thumbnail_image_url}
            sku={item.sku}
            model={item.model.glb}
            pageUrl={item.product_page_url}
            price={item.sale_price}
            handlePress={handlePress}
            closeOverlay={closeOverlay}
          />)}
        keyExtractor={item => item.sku}
      />
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    models: state.models,
    selectedModel: state.selectedModel
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handlePress(name, glb) {
      dispatch(addModel(name))
      dispatch(singleModel(glb))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsByCategory);

// export default ProductsByCategory

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
