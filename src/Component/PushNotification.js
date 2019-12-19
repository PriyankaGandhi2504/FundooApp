import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'
import PushNotification from 'react-native-push-notification'

class PushNotificationPage extends Component{

    handleButton = () => {
        PushNotification.localNotification({
            message : 'My Notification'
        })
        // this.refs['localNotification'].showNotification({
        //     title: 'Notification title',
        //     text: 'This is a short notification',
        //     onPress: () => alert('hello short'),
        //     onHide: () => alert('Byeeeee')
        //   });
    }

    render(){
        // this.refs.localNotification.showNotification({
        //     title: 'Notification title',
        //     text: 'This is a short notification',
        //     onPress: () => alert('hello short'),
        //     onHide: () => alert('Byeeeee')
        //   });
        return(
            <View>
                <View>
                <Button title = 'Show Notification'
                onPress = {this.handleButton}>
                </Button>                
                </View>
                
                {/* <View>
                <LocalNotification ref = 'localNotification'/>
                </View> */}
                    
            </View>
        )
    }
}

export default PushNotificationPage