import React,{Component} from 'react'
import {View,Text, SafeAreaView, ScrollView, Dimensions} from 'react-native'
import Router from './src/Component/Router'
import Login from './src/Component/Login'
import Dashboard from './src/Component/Dashboard'
import Register from './src/Component/Register'
import ScrollViewDemo from './src/Component/ScrollViewDemo'
import ForgotPassword from './src/Component/ForgotPassword'
import CreateNote from './src/Component/CreateNote'
import {createDrawerNavigator} from 'react-navigation-drawer'
import HomeScreen from './src/Component/HomeScreen'
import SettingScreen from './src/Component/SettingScreen'
import {DrawerItems} from 'react-navigation'
import DrawerRouter from './src/Component/DrawerNavigator'
import MoreOptions from './src/Component/MoreOptions'
import FlatListDemo from './src/Component/FlatListDemo'
import Try from './src/Component/Try'
// import Snackbar from './src/Component/SnackBar'

class App extends Component{
  render()
  {
    return(
      // <AppDrawerNavigator/>
     <Router/>
// {/* <Try/> */}
    //  <DrawerRouter/>
    //  <View>
      //  <FlatListDemo/>
          //  {/* <CreateNote/> */}
          // {/* <Dashboard/> */}
        //  {/* <Snackbar/> */}
        //  </View>
    );
  }
}


export default App
