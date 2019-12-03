import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Dropdown} from 'react-native-material-dropdown'

var date = new Date()
var currentDate = date.getDate()
var currentMonth = date.getMonth() + 1
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

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

class Datepicker extends Component{

    constructor(props){
        super(props)
        this.state = {
            currentDate : []
        }
    }


    render(){
        this.state.currentDate.push(currentDate)
        this.state.currentDate.push(monthNames[date.getMonth()])
        return(
            <View>
                <Dropdown
                        label = {this.state.currentDate}
                        containerStyle = {{width : 270, left : 20, top : 10}}
                        style = {{height : 25}}
                        data = {data}
                        
                        // placeholder = {currentDate}

                        // dropdownMargins = {top = 50}
                        />
            </View>
        )
    }
}

export default Datepicker