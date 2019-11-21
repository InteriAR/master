import { createNavigator } from 'react-navigation'
import Home from './Home'

const router = createNavigator({
    Home: { screen: Home }
})

export default router