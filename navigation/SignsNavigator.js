import {createStackNavigator} from 'react-navigation-stack';
import SignCategoryScreen from '../screens/SignCategoryScreen';
import SignsScreen from '../screens/SignsScreen';
import SignDetailScreen from '../screens/SignDetailScreen';
import {createAppContainer} from 'react-navigation';
import Colors from '../constants/Colors';

const SignsNavigator = createStackNavigator({
    Categories: SignCategoryScreen,
    Signs: SignsScreen,
    SignDetail: SignDetailScreen
},{
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'black' : Colors.primaryColor 
    }
});

export default createAppContainer(SignsNavigator);

