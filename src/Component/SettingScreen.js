import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

class SettingScreen extends React.Component {
  render() {
    return (
      <View style={{ display: "flex", alignItems: "center" }}>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>
            Open drawer
            Settings Screen
              </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SettingScreen;