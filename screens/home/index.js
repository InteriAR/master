import React from 'react'
import {StyleSheet, Text, View} from 'react-native'


class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hi</Text>
            </View>
        )
    }
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})