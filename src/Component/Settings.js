import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'

class Settings extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.props.navigation.openDrawer}>
                    <View>
                        <Text style={{ fontSize: 30 }}>
                            Settings
                    </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Settings