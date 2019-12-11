import React, {Component} from 'react'
import { View, Text, TouchableOpacity, ScrollView} from 'react-native'
import userData from '../../UserServices'
const UserData = new userData
import Note from './Note'
import DefaultSearchBar from './DefaultSearchBar'

var list = require('../Assets/List.png')
var grid = require('../Assets/Grid.png')

class Archive extends Component{

constructor(props){
    super(props)
    this.state = {
        archivedNotes : [],
        gridDisplay: false,
            gridView: {
                display: 'none'
            },
            icon: grid,
    }
}

componentDidMount = async() => {
    var details = UserData.userData()
    console.log("Details from Archive " + JSON.stringify(details));
    await this.setState({
        archivedNotes : details
    })

    console.log("Archived Notes " + JSON.stringify(this.state.archivedNotes));
    // console.log("Archive Value from Archive " + JSON.stringify(this.state.archivedNotes.isArchive));
    
}

render(){
    return(
            
                <View>
                    <View>
                        <DefaultSearchBar textdisplay = 'Archive' navigation = {this.props.navigation}/>
                    </View>

                    <TouchableOpacity>
                    <ScrollView>
                        <View>
                            {
                            this.state.archivedNotes.map((archivedNotes, indexes) => {
                                if(archivedNotes.isArchive){
                                return(
                                        <Note index = {indexes} Title = {archivedNotes.Title} Note = {archivedNotes.Note} navigation = {this.props.navigation} gridDisplayValue = {this.state.gridDisplay} Color = {archivedNotes.Color} Reminder = {archivedNotes.Reminder}/>
                                )
                                }
                            })}
                        </View>
                    </ScrollView>
            </TouchableOpacity>
            </View>
    )
}
}

export default Archive