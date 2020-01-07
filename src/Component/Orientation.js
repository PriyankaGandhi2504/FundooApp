import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'

class Orientation extends Component {

    constructor(props) {
        super(props)
        console.log("Constructor");
    }

    componentDidMount() {
        console.log("Component Did Mount");
    }

    componentDidUpdate() {
        console.log("Component Did Update");
    }

    render() {
        console.log("render");
        return (
            <TouchableOpacity>
                <View>
                    <Text> Hello </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default Orientation