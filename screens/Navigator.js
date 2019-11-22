import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './home'

const App = createStackNavigator({
    Default: {
        screen: Home,
    }
})

export default createAppContainer(App)