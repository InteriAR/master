import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import Home from './home'
import Categories from './categories'
import AR from './ar'
import InsideOverlay from './categories/inside-overlay'
import DetailsScreen from './categories/details-screen'

const Navigator = createAppContainer(createSwitchNavigator(
    {
        Home: { screen: Home },
        Categories: { screen: Categories, mode: 'modal', header: 'none' },
        AR: { screen: AR },
        Details: {
            screen: DetailsScreen
        }
    },
    {
        initialRouteName: 'Home'
    }
))

export default Navigator
