import React, {Component} from 'react'
import {View, Text, Dimensions} from 'react-native'
import Animated from 'react-native-reanimated'

const width = Dimensions.get('window').width
class Snackbar extends Component{
    state = {
        animatedValue : new Animated.Value(0)
    }

    componentDidMount(){
        this.toggleSnackbar
    }

    toggleSnackbar(){

    }
    
    render(){
        const {message, actionText} = this.props
        return(
            <View style = {{width : "100%", height : "100%", backgroundColor : 'lightblue'}}>
                <View style = {{backgroundColor : 'black', 
                flexDirection : "row", position : "absolute", bottom : 0, 
                paddingHorizontal : 24, paddingVertical : 14, width : width}}>
                    <Text style = {{flex : 1, color : 'white', fontSize : 15, fontWeight : "bold"}}> {message} </Text>
                    <Text style = {{color : 'white', fontSize : 15, fontWeight : "bold", paddingLeft : 24}}> {actionText} </Text>
                </View>
            </View>
        )
    }
}

export default Snackbar