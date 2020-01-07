import React, { Component } from 'react'
import { View, Text } from 'react-native'
import FastImage from 'react-native-fast-image'

class FastImageDemo extends Component {
    render() {
        return (
            <View style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                <FastImage
                    style={{ width: 350, height: 300 }}
                    source={{ uri: 'https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201909/positive-1521334_960_720-x640.jpg?rPgOxnVWANCxIs2RPpsbLVgAiUNwvzA6' }}
                // resizeMode={FastImage.resizeMode.contain}
                />
            </View>
        )
    }
}

export default FastImageDemo