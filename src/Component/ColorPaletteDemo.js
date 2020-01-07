import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './StyleSheets'
import ColorPalette from 'react-native-color-palette'

class ColorPaletteDemo extends Component {
    render() {
        return (
            <View>
                <ColorPalette style={styles.colorDummy}
                    onChange={color => alert(`Color selected: ${color}`)}
                    defaultColor={'#C0392B'}
                    colors={['#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9']}
                    title={"Dummy"}
                />
            </View>
        )
    }
}
export default ColorPaletteDemo