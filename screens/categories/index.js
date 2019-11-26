import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios'
import {Overlay} from 'react-native-elements'
// import { wayfairAuth } from './../../secrets'


class Categories extends React.Component {
    constructor() {
        super()
        this.state = {
            isVisible: true,
            products: []
        }
    }

    async componentDidMount() {
        console.log('inside did mount')
        const wayfairUrls = [
            'https://api.wayfair.com/v1/3dapi/models?page=1',
            'https://api.wayfair.com/v1/3dapi/models?page=2',
            'https://api.wayfair.com/v1/3dapi/models?page=3'
        ]
        const getProducts = async () => {
            try {
                const allProducts = await Promise.all(
                    wayfairUrls.map(url => axios.get(url, {
                        // headers: {
                        //     Authorization: wayfairAuth
                        // }
                    }))
                )
                return allProducts
            } catch (error) {
                console.error(error)
            }
        }
        const productData = await getProducts(); //[{}, {}, {}]
        const products = []
        productData.forEach(function (productObj) {
            products.push(...productObj.data)
        })
        // console.log(products)
        this.setState({ products: products })
    }

    render() {
        console.log('hello categories')
        console.log('this.state PRODUCTS------>', this.state.products)
        const productList = this.state.products.map((prod) => {
            return (
                <View key={prod.id}><Text>{prod.product_name}</Text></View>
            )
        })
        return (
            // <View style={styles.container}>
            //     <View><Text>categories</Text></View>
            //     {/* {productList} */}
            // </View>
            <Overlay
                    isVisible={this.state.isVisible}
                    onBackdropPress={() => {
                        this.setState({ isVisible: false })
                        this.props.navigation.navigate('AR')
                        }}
                    >
            <Text>Hello from Overlay!</Text>
            </Overlay>
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
