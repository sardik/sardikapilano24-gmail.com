import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SearcScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({

    Search : SearcScreen

},{
    initialRouteName : 'Search',
    defaultNavigationOptions : {
        title: 'BusinessSearch'
    }
});  

export default createAppContainer(navigator);


