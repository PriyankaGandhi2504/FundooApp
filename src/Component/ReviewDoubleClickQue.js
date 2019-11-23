import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'
import styles from './StyleSheets'

class ReviewDoubleClickQue extends Component{
    constructor(props){
        super(props)
        this.state = {
            counter : 0,
            textDisplay : false,
            textStyle : {
                display : 'none'
            }
        }
    }
    
    handleButton = () => {
        this.setState({
            counter : 1
        })
        if(!this.state.textDisplay && this.state.counter == 1){
                this.setState({
                    textDisplay : true,
                    textStyle : styles.textStyle
                })
        }
        else{
            this.setState({
                textDisplay : false,
                textStyle : {
                    display : 'none'
                }
            })
        }
    }

    render(){
        return(
            <View>
                <View>
                    <Button title = 'Click Me'
                    style = {{width : 30, height : 30}}
                    onPress = {this.handleButton}/>
                </View>
                <View style = {this.state.textStyle}>
                    <Text> Helllooo </Text>
                </View>
            </View>
            
        )
    }
}

export default ReviewDoubleClickQue