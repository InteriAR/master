import { createNavigator } from 'react-navigation'
import Home from './home'

const router = createNavigator({
    Home: { screen: Home }
})

export default router