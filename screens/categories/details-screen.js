// import React from 'react'
// import { View, Text, Button } from 'react-native'
// import { connect } from 'react-redux'

// class DetailsScreen extends React.Component {
//   render() {
//     // const { dummyReducer = {} } = this.props
//     // const { text = '' } = dummyReducer
//     // const { productsReducer = {} } = this.props
//     // const { products = 'no action' } = productsReducer
//     console.log('thisprops', this.props)
//     const products = this.props.products
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Text>My name is : {products}</Text>
//         <Button
//           title="Go to Home"
//           onPress={() => {
//             this.props.navigation.navigate('Home')
//           }}
//         />
//       </View>
//     );
//   }
// }

// export default connect(({ productsReducer }) => ({ productsReducer }))(DetailsScreen)
