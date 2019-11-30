import React from 'react'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import axios from 'axios'
import { Overlay } from 'react-native-elements'
// import { wayfairAuth } from './../../secrets'
import { connect } from 'react-redux'
import { dummyAction, loadModels, loadModelsThunk, singleCategory, clearCategory } from '../../store/actions'
import CategoryMenu from './category-menu'




class Categories extends React.Component {
    constructor() {
        super()
        this.state = {
            isVisible: true
        }
    }
    componentDidMount() {
        this.props.getModels()
        // this.props.clearSingleCategory()
    }

    // async componentDidMount() {
    //     console.log('inside did mount')
    //     const wayfairUrls = [
    //         'https://api.wayfair.com/v1/3dapi/models?page=1',
    //         'https://api.wayfair.com/v1/3dapi/models?page=2',
    //         'https://api.wayfair.com/v1/3dapi/models?page=3'
    //     ]
    //     const getProducts = async () => {
    //         try {
    //             const allProducts = await Promise.all(
    //                 wayfairUrls.map(url => axios.get(url, {
    //                     // headers: {
    //                     //     Authorization: wayfairAuth
    //                     // }
    //                 }))
    //             )
    //             return allProducts
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    //     const productData = await getProducts(); //[{}, {}, {}]

    //     //sort products by categories
    //     const productsByClassName = {}
    //     productData.forEach(function (prodObj) {
    //         const prodList = [...prodObj.data]
    //         prodList.forEach(function (prod) {
    //             let className = prod.class_name
    //             if (productsByClassName.hasOwnProperty(className)) {
    //                 productsByClassName[className].push(prod)
    //             } else {
    //                 productsByClassName[className] = [prod]
    //             }
    //         })
    //     })
    //     const formattedProducts = Object.entries(productsByClassName).map(([k, v]) => ({ category: k, productList: v }))
    //     this.setState({ products: formattedProducts })
    // }


    //         console.log('this.state PRODUCTS------>', this.state.products)
    //         const products = this.state.products
    //         // (13)[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    //         // 0: {category: "Accent Chairs", productList: Array(13)}
    //         if (this.state.products.length === 0) {
    //             return (
    //                 <View style={styles.container}>
    //                     <Text style={styles.loading}> loading.... </Text>
    //                 </View>
    //             )

    //         })
    render() {
        console.log('this props inside categories', this.props)
        const products = this.props.products
        const category = this.props.category

        if (category.length === 0) {
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
                    <CategoryMenu products={products} />

                </Overlay>
            )
        } else {
            return (
                <Overlay
                    isVisible={this.state.isVisible}
                    onBackdropPress={() => {
                        this.setState({ isVisible: false })
                        this.props.navigation.navigate('AR')
                        this.props.clearSingleCategory()
                    }}
                >
                    <Text>category exists!</Text>

                </Overlay>
            )
        }
        // <Text>Hello from Overlay!</Text>
        // <Button
        //     title="Go to Details"
        //     onPress={() => {
        //         // this.props.getModels()
        //         // this.props.navigation.navigate('Details')
        //     }}

        //         } else {
        //             return (

        //                 <View style={styles.container}>
        //                     <FlatList
        //                         data={products}
        //                         renderItem={({ item }) => <Item category={item.category} />}
        //                         keyExtractor={item => item.category}
        //                     />
        //                 </View>
        //             )
        //         }

    }
}

const mapStateToProps = state => {
    console.log('categories state', state)
    return {
        products: state.products,
        category: state.category
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getModels: () => dispatch(loadModelsThunk()),
        clearSingleCategory: () => dispatch(clearCategory())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)

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
