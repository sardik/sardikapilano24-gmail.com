import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SearcScreen from './src/screens/SearchScreen';
import ResultShowScreen from './src/screens/ResultShowScreen';

const navigator = createStackNavigator({

    Search : SearcScreen,
    ResultShow : ResultShowScreen

},{
    initialRouteName : 'Search',
    defaultNavigationOptions : {
        title: 'BusinessSearch'
    }
});  

export default createAppContainer(navigator);


