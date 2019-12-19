import React, { Component } from 'react'
import { View, Text } from 'react-native'
import FastImage from 'react-native-fast-image'

const YourImage = () => (
    <FastImage
        style={{ width: 200, height: 200 }}
        source={{
            uri: 'https://unsplash.it/400/400?image=1',
            // headers: { Authorization: 'someAuthToken' },
            // priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
    />
)

class FastImageDemo extends Component {
    render() {
        return (
            <View>
                <YourImage />
            </View>
        )
    }
}

export default FastImageDemo