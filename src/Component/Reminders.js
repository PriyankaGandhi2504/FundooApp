import React, {Component} from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { Divider } from 'react-native-elements'

class Reminders extends Component{
    
render(){
    return(
        <View>
            <TouchableOpacity onPress = {this.props.navigation.openDrawer}>
                <View>
                    <Text style = {{fontSize : 30}}>
                        Reminders Page
                    </Text>
            
                </View>
            </TouchableOpacity>
        </View>
    )
}
}

export default Reminders