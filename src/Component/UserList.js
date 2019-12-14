import React, { Component } from 'react';
import TableRow from './TableRow';

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
                name: 'Xyz'
            },
            {
                id: 3,
                name: 'Pqr'
            }
          ]
        };
      }
      
      tabRow(){
        if(this.state.users instanceof Array){
          return this.state.users.map(function(object, i){
              return <TableRow obj={object} key={i} />;
          })
        }
      }
      render() {
        return (
            <View>
                <View>
                <Text>ID</Text>
                  <Text>Name</Text>
                </View>
                <Text>
                {this.tabRow()}
                </Text>
            </View>
            
        );
      }
}
export default UserList;