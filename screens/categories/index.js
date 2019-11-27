import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, Image } from 'react-native'
import axios from 'axios'
import { Overlay, ButtonGroup } from 'react-native-elements'
import { wayfairAuth } from './../../secrets'
import ProductByCategory from './allCategories'
import HackyMenu from './hackyMenu'
// import { ScrollView } from 'react-native-gesture-handler'




class Categories extends React.Component {
    constructor() {
        super()
        this.state = {
            isVisible: true,
            products: {},
            selected: false,
            selectedCategory: []
        }
        this.renderButtons = this.renderButtons.bind(this)
        this.renderSingleCategory = this.renderSingleCategory.bind(this)
    }


    renderSingleCategory(productList) {
        const list = productList.map(function (prodObj) {
            const thumbnail = prodObj.thumbnail_image_url
            return (
                <View>
                    <Text style={styles.title}>{prodObj.sku}</Text>
                    <Image
                        style={{ width: 75, height: 75 }}
                        source={{ uri: thumbnail }}
                    />
                </View>
            )
        })
        console.log('list', list)
        return list
    }

    renderButtons(products) {
        // const formattedProducts = Object.entries(products).map(([k, v]) => ({ category: k, productList: v }))

        const list = Object.keys(products).map(productKey => {
            const productList = products[productKey]
            return (
                <View key={productKey}>
                    <TouchableOpacity onPress={() => this.setState({ selected: true, selectedCategory: productList })}>
                        <Text style={styles.title}>{productKey}</Text>
                    </TouchableOpacity>
                </View>
            )

        })
        return list
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
                        headers: {
                            Authorization: wayfairAuth
                        }
                    }))
                )
                return allProducts
            } catch (error) {
                console.error(error)
            }
        }
        const productData = await getProducts(); //[{}, {}, {}]

        //sort products by categories
        const productsByClassName = {}
        productData.forEach(function (prodObj) {
            const prodList = [...prodObj.data]
            prodList.forEach(function (prod) {
                let className = prod.class_name
                if (productsByClassName.hasOwnProperty(className)) {
                    productsByClassName[className].push(prod)
                } else {
                    productsByClassName[className] = [prod]
                }
            })
        })
        // const formattedProducts = Object.entries(productsByClassName).map(([k, v]) => ({ category: k, productList: v }))
        // this.setState({ products: formattedProducts })
        this.setState({ products: productsByClassName })
    }

    render() {

        console.log('this.state PRODUCTS------>', this.state.products)
        const products = this.state.products
        const selectedCategory = this.state.selectedCategory
        //         // (13)[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}] this.state.products
        //         // 0: {category: "Accent Chairs", productList: Array(13)}

        if (this.state.selected === false) {
            return (

                <Overlay
                    isVisible={this.state.isVisible}
                    onBackdropPress={() => {
                        this.setState({ isVisible: false })
                        this.props.navigation.navigate('AR')
                    }}
                >
                    {/* <Text>Hello from Overlay!</Text> */}
                    {/* <ProductByCategory products={products} /> */}
                    <View style={styles.container}>
                        {this.renderButtons(products)}
                    </View>
                </Overlay>
            )

        } else {
            return (

                <Overlay
                    isVisible={this.state.isVisible}
                    onBackdropPress={() => {
                        this.setState({ isVisible: false })
                        this.props.navigation.navigate('AR')
                    }}
                >
                    {/* <Text>Hello from Overlay!</Text> */}
                    {/* <ProductByCategory products={products} /> */}
                    <View style={styles.container}>
                        {this.renderSingleCategory(selectedCategory)}
                    </View>
                </Overlay>
            )
        }


    }
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    loading: {
        fontSize: 40,
        color: 'blue',

    }
});
