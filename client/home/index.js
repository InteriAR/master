import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center,'
    }
})
export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                Hello
            </View>
        )
    }
}

