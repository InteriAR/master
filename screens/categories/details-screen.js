import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

class DetailsScreen extends React.Component {
  render() {
    const { dummyReducer = {} } = this.props
    const { text = '' } = dummyReducer
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>My name is : {text}</Text>
        <Button
          title="Go to Home"
          onPress={() => {
            this.props.navigation.navigate('Home')
          }}
        />
      </View>
    );
  }
}

export default connect(({ dummyReducer }) => ({ dummyReducer }))(DetailsScreen)
