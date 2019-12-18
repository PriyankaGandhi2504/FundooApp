
import React,{Component} from 'react';
import SettingScreen from './SettingScreen'
import {
  View,
  Button
} from 'react-native';
import MoreOptions from './MoreOptions'

class HomeScreen extends React.Component {
    static navigationOptions = {
      title : 'Welcome'
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
          <View>
            <Button
            title="Go to Jane's profile"
            onPress={this.props.navigation.openDrawer}
        />
          </View>
        
      );
    }
  }

  export default HomeScreen;