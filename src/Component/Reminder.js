import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image, Button} from 'react-native'
import styles from './StyleSheets'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker'
import {Dropdown} from 'react-native-material-dropdown'
import Datedropdown from './Datedropdown';
import DateTimePicker from 'react-native-modal-datetime-picker';
import CreateNote from './CreateNote'
 
var radioValues = [
    {label : 'Time', value : 0},
    {label : 'Place', value : 1}
]

var date = new Date()
var currentDate = date.getDate()
var currentMonth = date.getMonth() + 1
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var hours = date.getHours()
var minutes = date.getMinutes()

class Reminder extends Component{

    constructor(props){
        super(props)
        this.state = {
            date : currentDate,
            month : currentMonth,
            isDateTimePickerVisible : false,
            value : ''
        }
    }

    handleDateTimeVisibility = () => {
        if(this.state.isDateTimePickerVisible === false){
            this.setState({
                isDateTimePickerVisible : true
            })
        }else{
            this.setState({
                isDateTimePickerVisible : false
            })
        }
    }

    hideDateTimePicker = () => {
        this.setState({ 
            isDateTimePickerVisible: false
        });
    }
     
    handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        this.hideDateTimePicker();
    };

    handleRadioButton = () => {
        alert(`Value Selected`)
        this.setState({
            value:value
        })
        console.log('Value of Radio Button ' + this.state.value)
    }

    handleSaveButton = () => {
        this.props.handleReminder()
        this.props.navigation.navigate('CreateNote')
    }

    handleCancelButton = () => {
        this.props.handleReminder()
        this.props.navigation.navigate('CreateNote')
    }

    render(){
        
        return(
            <View style = {styles.reminderContainer}>
                <View style = {styles.reminderSubContainer}>
                    <View>
                        <Text style = {{fontSize : 15, top : 20, left : 20}}> Add reminder </Text>
                    </View>
                    
                    <View style = {{top : 30, left : 20}}>
                        <RadioForm 
                        labelStyle = {{left : -5}}
                        buttonSize = {15}
                        buttonOuterStyle = {10}
                        // selectedButtonColor = {'green'}
                        // selectedLabelColor = {'green'}
                        // disabled = {true}
                        // animation = {true}
                        // buttonStyle = {{marginLeft : 20}}
                        // buttonWrapStyle = {{marginLeft : 30}}
                        radio_props = {radioValues}
                        initial = {0}
                        formHorizontal = {true}
                        onPress={(value) => {this.setState({value:value})}}
                        >
                        </RadioForm>
                    </View>

                    <View>
                        <Datedropdown/>
                    </View>

                    {/* <View> */}
                        {/* <Dropdown value = {selectDate}
                        data = {selectDate}
                        > */}
                        {/* <View style = {{top : 10, left : 15}}>
                            <Text> Select a Date </Text>
                        </View>
                        <DatePicker       
                        style = {{width : 300, top : 20, left : 20}}
                        date = {this.state.date}
                        format = 'DD-MM'
                        onDateChange={(date) => {this.setState({date: date})}}
                        /> */}
                        {/* </Dropdown> */}       
                    {/* </View> */}

                    <View style = {{top : 25, left : 25}}>
                        <Text style = {{fontWeight : 'bold'}}>
                            Select a Date and Time : 
                        </Text>
                    </View>
                    <View>
                        <DatePicker
                        style = {{top : 40, width : '90%', left : 20}}
                        date = {this.state.date}
                        format = 'DD-MM-YYYY h:mm:ss a'
                        mode = 'datetime'
                        onDateChange = {(date) => {this.setState({date:date})}}/>
                        {/* <TouchableOpacity style = {{top : 40, left : 20, borderWidth : 1, width : '80%', height : 50, display : 'flex', justifyContent : 'space-around'}}
                        onPress = {this.handleDateTimeVisibility}>
                            <Text style = {{top : 10, display : 'flex', alignSelf : 'center', fontSize : 16}}>
                                Select Date and Time
                            </Text>
                            <Image style = {{bottom : 13, width : 35, height : 35, right : 5, display : 'flex', alignSelf : 'flex-end',}}
                        source = {require('../Assets/Calendar.png')}/>
                        </TouchableOpacity>
                        
                        <DateTimePicker
                        isVisible = {this.state.isDateTimePickerVisible}
                        mode = {"datetime"}
                        datePickerModeAndroid = {'calendar'}
                        // timePickerModeAndroid = {'spinner'}
                        is24Hour = {true}
                        onConfirm={this.handleDatePicked}
                        onCancel={this.hideDateTimePicker}
                        /> */}
                    </View>

                    <View style = {{width : 150, display : 'flex', flexDirection : 'row', justifyContent : 'space-around', alignSelf : 'flex-end', right : 5, top : 60}}>
                        <Button title = 'Cancel'
                        onPress = {this.handleCancelButton}/>            
                        <Button title = 'Save'
                        onPress = {this.handleSaveButton}/>
                    </View>
                </View>
            </View>
        )
    }
}

export default Reminder