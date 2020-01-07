import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class CreateLabel extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.props.navigation.openDrawer}>
                    <View>
                        <Text style={{ fontSize: 30 }}>
                            Create Label
                    </Text>

                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default CreateLabel