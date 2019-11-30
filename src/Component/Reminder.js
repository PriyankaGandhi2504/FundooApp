import React, {Component} from 'react'
import {View, Text} from 'react-native'
import styles from './StyleSheets'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
 
var radioValues = [
    {label : 'Time', value : 0},
    {label : 'Place', value : 1}
]

var date = new Date()
var currentDate = date.getDate()
var currentMonth = date.getMonth() + 1

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
class Reminder extends Component{

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        // console.log("Current date " + currentDate + monthNames.currentMonth);
        return(
            <View style = {styles.reminderContainer}>
                <View style = {styles.reminderSubContainer}>
                    <View>
                    <Text style = {{fontSize : 15, top : 20, left : 20}}> Add reminder </Text>
                    </View>
                    
                    <View style = {{top : 30, left : 20}}>
                        <RadioForm 
                        radio_props = {radioValues}
                        initial = {0}
                        formHorizontal = {true}
                        onPress={(value) => {this.setState({value:value})}}
                        />
                    </View>

                    <View>

                    </View>
                </View>
            </View>
        )
    }
}

export default Reminder