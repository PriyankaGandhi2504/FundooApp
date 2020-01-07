import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {DrawerItems} from 'react-navigation'
import DrawerRouter from './DrawerNavigator'
import SettingScreen from './SettingScreen'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import ForgotPassword from './ForgotPassword'
import CreateNote from './CreateNote'
import MoreOptions from './MoreOptions'
import SignOutMenu from './SignOutMenu'
import Reminders from './Reminders'
import CreateLabel from './CreateLabel';
import Archive from './Archive'
import DeletedNotes from './DeletedNotes';
import Settings from './Settings'
import HelpFeedback from './HelpFeedback'
import SearchNote from './SearchNote'
import RestoreTrash from './RestoreTrash'
import SplashScreen from './SplashScreen'

const MainNavigator = createStackNavigator({
  Login: {screen: Login, navigationOptions : {header : null}},
  Dashboard: {screen: Dashboard, navigationOptions : {header : null}},
  ForgotPassword : {screen : ForgotPassword},
  Register : {screen : Register, navigationOptions : {header : null}},
  CreateNote : {screen : CreateNote, navigationOptions : {header : null}},
  MoreOptions : {screen : MoreOptions},
  DrawerRouter : {screen : DrawerRouter, navigationOptions : {header : null}},
  SignOutMenu : {screen : SignOutMenu, navigationOptions : {header : null}},
  Reminders : {screen : Reminders, navigationOptions : {header : null}},
  CreateLabel : {screen : CreateLabel, navigationOptions : {header : null}},
  Archive : {screen : Archive, navigationOptions : {header : null}},
  DeletedNotes : {screen : DeletedNotes, navigationOptions : {header : null}},
  Settings : {screen : Settings, navigationOptions : {header : null}},
  HelpFeedback : {screen : HelpFeedback, navigationOptions : {header : null}},
  SearchNote : {screen : SearchNote, navigationOptions : {header : null}},
  RestoreTrash : {screen : RestoreTrash, navigationOptions : {header : null}},
  SplashScreen : {screen : SplashScreen, navigationOptions : {header : null}}
  // HomeScreen : {screen : HomeScreen, navigationOptions : {header : null}},
  // SettingScreen : {screen : SettingScreen, navigationOptions : {header : null}}
},
{
    initialRouteName:'SplashScreen'
}
);

const Router = createAppContainer(MainNavigator);
export default Router;