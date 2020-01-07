import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import LocalNotification from 'react-native-local-notification'

class LocalNotificationPage extends Component {

    handleButton = () => {
        this.refs['localNotification'].showNotification({
            title: 'Notification title',
            text: 'This is a short notification',
            onPress: () => alert('hello short'),
            onHide: () => alert('Byeeeee')
        });
    }

    render() {
        return (
            <View>
                <View>
                    <Button title='Show Notification'
                        onPress={this.handleButton}>
                    </Button>
                </View>

                <View>
                    <LocalNotification ref='localNotification' />
                </View>
            </View>
        )
    }
}

export default LocalNotificationPage