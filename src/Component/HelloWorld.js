import React, {Component} from 'react'
import {Text, View} from 'react-native'
import styles from './HelloStyle'

class HelloWorld extends Component{
    render(){
        return (
            <View style = {styles.mainContainer}>
                <Text style = {styles.subContainer}>
                Hello World 
                </Text>
              
            </View>
        )
    }
}

// const styles = StyleSheet.create({
//     mainContainer:{
//         justifyContent : "flex-start",
//         alignItems : "center"
//     } 
// });

export default HelloWorld