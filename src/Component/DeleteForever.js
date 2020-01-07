import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class DeleteForever extends Component {
    render() {
        return (
            <View>
                <View style={{ top: 20, left: 20 }}>
                    <Text style={{ fontSize: 20 }}> Delete this note forever? </Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <View style={{ width: 100, top: 40 }}>
                        <Button title='Cancel' />
                    </View>
                    <View style={{ width: 100, top: 40 }}>
                        <Button title='Delete' />
                    </View>
                </View>
            </View>
        )
    }
}

export default DeleteForever