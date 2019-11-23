import React from 'react'
import {StyleSheet, Text, View} from 'react-native'


class Categories extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Categories</Text> 
                
            </View>
        )
    }
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})