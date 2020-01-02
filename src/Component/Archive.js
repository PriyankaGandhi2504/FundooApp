import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import userData from '../../UserServices'
const UserData = new userData
import Note from './Note'
import DefaultSearchBar from './DefaultSearchBar'

var list = require('../Assets/List.png')
var grid = require('../Assets/Grid.png')

class Archive extends Component {

    constructor(props) {
        super(props)
        this.state = {
            archivedNotes: [],
            gridDisplay: false,
            gridView: {
                display: 'none'
            },
            icon: grid,
        }
    }

    componentDidMount = () => {
        UserData.userData( (response) => {
            // console.log('Aerchived notes in  Archive page',response)
            this.setState({
                archivedNotes: response
            })
        })
        // console.log("Details from Archive " + JSON.stringify(details));
        // await this.setState({
        //     archivedNotes: details
        // })

        // console.log("Archived Notes " + JSON.stringify(this.state.archivedNotes));
        // console.log("Archive Value from Archive " + JSON.stringify(this.state.archivedNotes.isArchive)); 
    }

    render() {
        return (
            <View>
                <View>
                    <DefaultSearchBar textdisplay='Archive' navigation={this.props.navigation} />
                </View>

                <TouchableOpacity>
                    <ScrollView>
                        <View style = {{height : '100%'}}>
                            {
                                Object.getOwnPropertyNames(this.state.archivedNotes).map((key, indexes) => {
                                    if (this.state.archivedNotes[key].isArchive) {
                                        return (
                                            <Note index={indexes} Title={this.state.archivedNotes[key].Title} 
                                            Note={this.state.archivedNotes[key].Note} navigation={this.props.navigation} 
                                            gridDisplayValue={this.state.gridDisplay} Color={this.state.archivedNotes[key].Color} 
                                            Reminder={this.state.archivedNotes[key].Reminder} chosenImage={this.state.archivedNotes[key].chosenImage}/>
                                        )
                                    }
                                })}
                        </View>
                        <View style = {{height : 60}}></View>
                    </ScrollView>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Archive