import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {DrawerItems} from 'react-navigation'

import HomeScreen from './HomeScreen'
import SettingScreen from './SettingScreen'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import ForgotPassword from './ForgotPassword'
import CreateNote from './CreateNote'
import MoreOptions from './MoreOptions'

const AppDrawerNavigator = createDrawerNavigator({
    Dashboard : Dashboard,
    HomeScreen : HomeScreen,
    SettingScreen : SettingScreen,
    MoreOptions : MoreOptions,
    // CreateNote : CreateNote,
    },
    {
      // hideStatusBar : true,
      drawerBackgroundColor : 'rgba(255,255,255,.9)',
    //   overlayColor : '#6b52ae',
      contentOptions : {
        activeTintColor : '#fff',
        activeBackgroundColor : '#6b52ae'
      },
    })
  
  const DrawerRouter = createAppContainer(AppDrawerNavigator);
  // const Router = createDrawerNavigator(MainNavigator)
  export default DrawerRouter;