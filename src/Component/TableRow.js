import React, { Component } from 'react';
import { View, Text } from 'react-native'

class TableRow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: []
    }
  }
  componentDidMount() {
    this.setState({
      arr: JSON.stringify(this.props)
    })
  }
  render() {
    return (
      <View style={{
        height: '100%', width: '100%', backgroundColor: 'pink',
        flexDirection: 'row', justifyContent: 'space-around'
      }}>
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