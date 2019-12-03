import React, {Component} from 'react'
import {View, Text} from 'react-native'
import styles from './StyleSheets'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker'
import {Dropdown} from 'react-native-material-dropdown'
import Datepicker from './DatePicker';
 
var radioValues = [
    {label : 'Time', value : 0},
    {label : 'Place', value : 1}
]

var date = new Date()
var currentDate = date.getDate()
var currentMonth = date.getMonth() + 1
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// var currentDateMonth = currentDate + currentMonth
var dateObject = {
    currentdate : currentDate,
    currentMonth : monthNames[date.getMonth()]
}

var data = [{
    value : 'Today'
},
{
    value : 'Tomorrow'
},
{
    value : 'Next Monday'
},
{
    value : 'Select a date...'
}]

class Reminder extends Component{

    constructor(props){
        super(props)
        this.state = {
            date : currentDate,
            month : currentMonth
        }
    }

    render(){
        console.log("Current date " + JSON.stringify(dateObject));
        return(
            <View style = {styles.reminderContainer}>
                <View style = {styles.reminderSubContainer}>
                    <View>
                        <Text style = {{fontSize : 15, top : 20, left : 20}}> Add reminder </Text>
                    </View>
                    
                    <View style = {{top : 30, left : 20}}>
                        <RadioForm 
                        labelStyle = {{left : -5}}
                        labelWrapStyle = {{}}
                        buttonStyle = {{marginLeft : 20}}
                        buttonWrapStyle = {{marginLeft : 30}}
                        radio_props = {radioValues}
                        initial = {0}
                        formHorizontal = {true}
                        onPress={(value) => {this.setState({value:value})}}
                        />
                    </View>

                    <View>
                        <Datepicker/>
                        {/* <Dropdown
                        label = {currentDate, currentMonth}
                        containerStyle = {{width : 270, left : 20, top : 10}}
                        style = {{height : 25}}
                        data = {data}
                        // placeholder = {currentDate}

                        // dropdownMargins = {top = 50}
                        /> */}
                            
                        {/* </Dropdown> */}
                        {/* <DatePicker
                        style = {{width : 200, top : 40, left : 20}}
                        date = {this.state.date}
                        format = 'DD-MM'
                        /> */}
                    </View>

                    <View>
                        <Dropdown
                            label = {currentDate, currentMonth}
                            containerStyle = {{width : 270, left : 20, top : 10}}
                            style = {{height : 25}}
                            data = {data}
                            // placeholder = {currentDate}

                            // dropdownMargins = {top = 50}
                        />
                    </View>

                    <View>
                        <Dropdown
                            label = {currentDate, currentMonth}
                            containerStyle = {{width : 270, left : 20, top : 10}}
                            style = {{height : 25}}
                            data = {data}
                            // placeholder = {currentDate}

                            // dropdownMargins = {top = 50}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

export default Reminder