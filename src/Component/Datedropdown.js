import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown'

var date = new Date()
var currentDate = date.getDate()
var currentMonth = date.getMonth() + 1
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var curentDate = currentDate + monthNames[date.getMonth()]


var data = [{
    value: 'Today'
},
{
    value: 'Tomorrow'
},
{
    value: 'Next Monday'
}]

class Datedropdown extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentDate: []
        }
    }

    handleSelectedValue = () => {
        alert(`Value Selected ${data}`)
    }

    render() {

        return (
            <View>
                <Dropdown
                    value={curentDate}
                    containerStyle={{ width: 270, left: 20, top: 20 }}
                    style={{ height: 25 }}
                    data={data}
                // placeholder = {currentDate}
                // dropdownMargins = {top = 50}
                />
            </View>
        )
    }
}

export default Datedropdown