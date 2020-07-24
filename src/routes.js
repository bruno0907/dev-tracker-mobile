import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevTracker'
            },
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no Github'
            },
        }
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#218362'
            },
        },
    })
);

export default Routes;