import React from 'react'
import {StyleSheet, View} from 'react-native'


export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                Hello
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})