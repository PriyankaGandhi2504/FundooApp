import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import {View, Text} from 'react-native'
 
class MoreOptions extends Component {
  render() {
    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];
 
    return (
        <View style = {{top : 200}}>
          <Text>
            More Options Page
          </Text>
            {/* <Dropdown
            label='Favorite Fruit'
            data={data} */}
             {/* dropdownPosition = '50' */}
             {/* dropdownMargins = '10' */}
            {/* /> */}
        </View>
    );
  }
}

export default MoreOptions