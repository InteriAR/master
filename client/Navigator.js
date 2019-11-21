import { createStackNavigator } from 'react-navigation-stack'
import Home from './home'

const Navigator = createStackNavigator({
    Home: { screen: Home }
})

export default Navigator;
