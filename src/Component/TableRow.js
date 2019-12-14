import React, { Component } from 'react';
import {View, Text} from 'react-native'

class TableRow extends Component {
  render() {
    return (
       <View>
           <Text>
           {this.props.obj.id}
          </Text>
            <Text>
                {this.props.obj.name}
           </Text>        
       </View>
          
    );
  }
}

export default TableRow;