import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Interi-AR</Text>
                {/* <Button title='Menu'  onPress={() => console.log(this)} /> */}
                <Button title='Menu' onPress={() => this.props.navigation.navigate('AR')} />
            </View>
        )
    }
}

export default withNavigation(Home)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
