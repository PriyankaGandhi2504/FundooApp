import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import userData from '../../UserServices'
const UserData = new userData
import Note from './Note'
import DefaultSearchBar from './DefaultSearchBar'

var grid = require('../Assets/Grid.png')

class Reminders extends Component {

    constructor(props) {
        super(props)
        this.state = {
            reminderNotes: [],
            gridDisplay: false,
            gridView: {
                display: 'none'
            },
            icon: grid
        }
    }

    componentDidMount = () => {
        UserData.userData((response) => {
            this.setState({
                reminderNotes: response
            })
        })
    }

    render() {
        return (
            <View>
                <View>
                    <DefaultSearchBar textdisplay='Reminders' navigation={this.props.navigation} />
                </View>

                <TouchableOpacity>
                    <ScrollView>
                        <View style={{ height: '100%' }}>
                            {
                                Object.getOwnPropertyNames(this.state.reminderNotes).map((key, indexes) => {
                                    if (this.state.reminderNotes[key].Reminder) {
                                        return (
                                            <Note index={indexes} Title={this.state.reminderNotes[key].Title}
                                                Note={this.state.reminderNotes[key].Note} navigation={this.props.navigation}
                                                gridDisplayValue={this.state.gridDisplay} Color={this.state.reminderNotes[key].Color}
                                                Reminder={this.state.reminderNotes[key].Reminder} chosenImage={this.state.reminderNotes[key].chosenImage} />
                                        )
                                    }
                                })}
                        </View>
                        <View style={{ height: 60 }}></View>
                    </ScrollView>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Reminders