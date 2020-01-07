import React, { Component } from 'react';
import TableRow from './TableRow';
import { View, Text } from 'react-native'

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: 'Abc'

        },
        {
          id: 2,
          name: 'Pqr'
        },
        {
          id: 3,
          name: 'Xyz'
        }
      ]
    };
  }

  tabRow() {
    if (this.state.users instanceof Array) {
      return this.state.users.map(function (object, i) {
        return <TableRow obj={object} key={i} />;
      })
    }
  }

  render() {
    return (
      <View style={{ backgroundColor: 'lightblue' }}>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text>Users ID</Text>
            <Text>Users Name</Text>
          </View>
          <View>
            {this.tabRow()}
          </View>
        </View>
      </View>
    );
  }
}
export default UserList;