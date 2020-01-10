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
// import MoreOptions from './src/Component/MoreOptions'
import FlatListDemo from './src/Component/FlatListDemo'
// import Try from './src/Component/Try'
import ReviewDoubleClickQue from './src/Component/ReviewDoubleClickQue'
import SignOutMenu from './src/Component/SignOutMenu'
// import Snackbar from './src/Component/SnackBar'
import store from './src/Component/SignOutStore' 
import {Provider} from 'react-redux'
import MultiSelectDemo from './src/Component/MultiSelectDemo'
import Reminders from './src/Component/Reminders'
import CreateLabel from './src/Component/CreateLabel'
import Archive from './src/Component/Archive'
import ColorPaletteDemo from './src/Component/ColorPaletteDemo'
import ToggleSearchBar from './src/Component/ToggleSearchBar'
import Reminder from './src/Component/Reminder'
import ToggleSearchbarMenu from './src/Component/ToggleSearchbarMenu'
import Datedropdown from './src/Component/Datedropdown'
import Note from './src/Component/Note'
import AddBoxMenu from './src/Component/AddBoxMenu'
import Orientation from './src/Component/Orientation'
import SearchNote from './src/Component/SearchNote'
import RestoreTrash from './src/Component/RestoreTrash'
import RestoreOptions from './src/Component/RestoreOptions'
import Hoc from './src/Component/HOC'
import UserList from './src/Component/UserList'
import FastImageDemo from './src/Component/FastImageDemo'
import RestDemo from './src/Component/RestDemo'
import AxiosDemo from './src/Component/AxiosDemo'
import SplashScreen from './src/Component/SplashScreen'
import DeleteForever from './src/Component/DeleteForever'
// import LocalNotificationPage from './src/Component/LocalNotification'
// import PushNotificationPage from './src/Component/PushNotification'
// import Background from './src/Component/Background'
// import SplashScreen from './src/Component/SplashScreen'
// import RefreshControlDemo from './src/Component/RefreshControlDemo'

const UsersData = [
  {
      id: 1,
      name: 'Abc'
        
  },
  {
      id: 2,
      name: 'Infosys'
  },
  {
      id: 3,
      name: 'Reliance'
  }
];

const Users = Hoc(
  UserList,
  UsersData
);


class App extends Component{
  render()
  {
    return(
      // <AppDrawerNavigator/>
      // <Provider store = {store}>
     <Router/>

      // </Provider>

// {/* <Try/> */}
    //  <DrawerRouter/>
      // <View>
      //    {/* <Users/> */}
      //    {/* <AxiosDemo/> */}
      //    {/* <RestDemo/> */}
      //    {/* <FastImageDemo/> */}
      //   {/* <Background/> */}
      // {/* <LocalNotificationPage/> */}
      // {/* <PushNotificationPage/> */}
      // {/* <RestoreTrash/> */}
      // <DeleteForever/>
      //   {/* <SplashScreen/> */}
      // {/* <SearchNote/> */}
      //   {/* <RefreshControlDemo/> */}
      //   {/* <Orientation/> */}
      //   {/* <AddBoxMenu/> */}
      //   {/* <Reminder/> */}
      //   {/* <Datedropdown/> */}
      //           {/* <MultiSelectDemo/>
      //            {/* <SignOutMenu/> */}
      //              {/* <ReviewDoubleClickQue/> */}
      //           {/* <FlatListDemo/> */}
      //           {/* <Note/> */}
      //          {/* <ToggleSearchBar/> */}
      //          {/* <ToggleSearchbarMenu/> */}
      //           {/* <ColorPaletteDemo/> */}
      //                     {/* <CreateNote/> */}
      //                   {/* <Dashboard/> */}
      //               {/* <Snackbar/> */}
      //          </View>
    );
  }
}



export default App
