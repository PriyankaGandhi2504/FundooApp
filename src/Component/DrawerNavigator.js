import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {DrawerItems} from 'react-navigation'
import React from 'react'
import {Image} from 'react-native'
// import HomeScreen from './HomeScreen'
// import SettingScreen from './SettingScreen'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import ForgotPassword from './ForgotPassword'
import CreateNote from './CreateNote'
// import MoreOptions from './MoreOptions'
import { Divider } from 'react-native-elements';
import Reminders from './Reminders'
import CreateLabel from './CreateLabel'
import styles from './StyleSheets';
import Archive from './Archive'
import DeletedNotes from './DeletedNotes'
import Settings from './Settings';
import HelpFeedback from './HelpFeedback';

const AppDrawerNavigator = createDrawerNavigator({
    Dashboard : {screen : Dashboard, navigationOptions : 
      {drawerIcon : (<Image style = {{width : 25, height : 25}}
        source = {require('../Assets/NotesIcon.png')}/>), 
      drawerLabel : 'Note'
    }},
    Reminders : {screen : Reminders, navigationOptions : 
      {drawerIcon : (<Image style = {{width : 25, height : 25}}
        source = {require('../Assets/Reminders.png')}/>)
      }},
    CreateLabel : {screen : CreateLabel, navigationOptions : 
      {drawerLabel : 'Create New Label',
      drawerIcon : (<Image style = {{width : 35, height : 35}}
        source = {require('../Assets/NewLabel.png')}/>)
      }},
    Archive : {screen : Archive, navigationOptions : 
      {drawerIcon : (<Image style = {{width : 25, height : 25}}
      source = {require('../Assets/Archive.png')}/>)
    }},
    DeletedNotes : {screen : DeletedNotes, navigationOptions : 
      {drawerLabel : 'Deleted',
      drawerIcon : (<Image style = {{width : 25, height : 25}}
        source = {require('../Assets/Trash.png')}/>),
    }},
    Settings : {screen : Settings, navigationOptions : 
      {drawerIcon : (<Image style = {{width : 25, height : 25}}
      source = {require('../Assets/Setting.png')}/>)}},
    HelpFeedback : {screen : HelpFeedback, navigationOptions : {
      drawerLabel : 'Help & Feedback',
      drawerIcon : (<Image style = {{width : 25, height : 25}}
      source = {require('../Assets/HelpFeedback.png')}/>)
    }}
    // CreateNote : CreateNote,
    },
    {
      // drawerType : "slide",
      // hideStatusBar : true,
      drawerBackgroundColor : 'rgba(255,255,255,.99)',
      // contentComponent : contentComponent
    //   overlayColor : '#6b52ae',
      contentOptions : {
        
        activeTintColor : 'black',
        activeBackgroundColor : '#feefc3',
        itemsContainerStyle: {
          marginVertical: 50,
        },
        
        // textDecorationColor : 'black',
        // activeBackgroundColor : 'black'
      },
    })


    // const AppSwitchNavigator = createSwitchNavigator({
    //   Dashboard : {screen : AppDrawerNavigator}
    // })
  
  const DrawerRouter = createAppContainer(AppDrawerNavigator);
  // const Router = createDrawerNavigator(MainNavigator)
  export default DrawerRouter;