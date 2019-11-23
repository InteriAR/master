import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './home'
import Categories from './categories'

const App = createStackNavigator({
    Default: {
        screen: Home,
    },
    CategoryButton: {
        screq: Categories
    },
})

export default createAppContainer(App)