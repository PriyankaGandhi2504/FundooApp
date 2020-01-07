import React, { Component } from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'

class RestoreOptions extends Component {
    render() {
        return (
            <View style={{ height: 100, width: '100%' }}>
                <View>
                    <View style={{ height: 50 }}>
                        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row' }}>
                            <Image style={{ width: 30, height: 30, top: 10, left: 15 }}
                                source={require('../Assets/restore.png')} />
                            <Text style={{ fontSize: 20, top: 10, left: 40 }}> Restore </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: 50 }}>
                        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row' }}>
                            <Image style={{ width: 30, height: 30, top: 10, left: 15 }}
                                source={require('../Assets/deleteForever.png')} />
                            <Text style={{ fontSize: 20, top: 10, left: 40 }}> Delete Forever </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default RestoreOptions