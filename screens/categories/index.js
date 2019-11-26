import React from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView } from 'react-native'
import axios from 'axios'
import { wayfairAuth } from './../../secrets'

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    }
]

function Item({ category }) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{category}</Text>
        </View>
    );
}

class Categories extends React.Component {
    constructor() {
        super()
        this.state = {
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
        const formattedProducts = Object.entries(productsByClassName).map(([k, v]) => ({ category: k, productList: v }))
        this.setState({ products: formattedProducts })
    }

    render() {

        console.log('this.state PRODUCTS------>', this.state.products)
        const products = this.state.products
        // (13)[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        // 0: {category: "Accent Chairs", productList: Array(13)}
        if (this.state.products.length === 0) {
            return (
                <View style={styles.container}>
                    <Text style={styles.loading}> loading.... </Text>
                </View>
            )
        } else {
            return (

                <View style={styles.container}>
                    <FlatList
                        data={products}
                        renderItem={({ item }) => <Item category={item.category} />}
                        keyExtractor={item => item.category}
                    />
                </View>
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
