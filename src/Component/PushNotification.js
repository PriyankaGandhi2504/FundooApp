import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import PushNotification from 'react-native-push-notification'

class PushNotificationPage extends Component {

    handleButton = () => {
        PushNotification.localNotification({
            message: 'My Notification'
        })
    }

    render() {
        return (
            <View>
                <View>
                    <Button title='Show Notification'
                        onPress={this.handleButton}>
                    </Button>
                </View>
            </View>
        )
    }
}

export default PushNotificationPage