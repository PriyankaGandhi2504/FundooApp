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
import FlatList1 from './src/Component/FlatList'
import ColorPaletteDemo from './src/Component/ColorPaletteDemo'
import ToggleSearchBar from './src/Component/ToggleSearchBar'
import Reminder from './src/Component/Reminder'
import ToggleSearchbarMenu from './src/Component/ToggleSearchbarMenu'
import Datepicker from './src/Component/DatePicker'

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
      //   <Reminder/>
      //   {/* <Datepicker/> */}
      //           {/* <MultiSelectDemo/>
      //            {/* <SignOutMenu/> */}
      //              {/* <ReviewDoubleClickQue/> */}
      //           {/* <FlatListDemo/> */}
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
