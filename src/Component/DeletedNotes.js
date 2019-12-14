import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import userData from '../../UserServices'
const UserData = new userData
import Note from './Note'

class DeletedNotes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            deletedNotes: [],
            gridDisplay: false,
            emptyNoteDisplay : false,
            isEmptyNoteDisplay : {
                display : 'none'
            }
        }
    }

    componentDidMount = () => {
        UserData.userData( (response) => {
            this.setState({
                deletedNotes: response
            })
        })

        // console.log("Details from Deleted Notes " + JSON.stringify(details));
         
        // console.log("Deleted Notes " + JSON.stringify(this.state.deletedNotes));
    }

    handleDeleteMenu = () => {
        if(!this.state.emptyNoteDisplay){
            this.setState({
                emptyNoteDisplay : true,
                isEmptyNoteDisplay : {
                    width : '100%', alignItems : 'flex-end'
                }
            })
        }else{
            this.setState({
                emptyNoteDisplay : false,
                isEmptyNoteDisplay : {
                    display : 'none'
                }
            })
        }
    }

    handleEmptyRecycleBin = () => {
        
    }

    render() {
        return (
            <View>
                <View style={{ display: 'flex', flexDirection: 'row', width : '100%', justifyContent : 'space-around', borderWidth : 0.5, borderRadius : 10, height : 40, top : 5}}>
                    <View>
                        <TouchableOpacity
                            onPress={this.props.navigation.openDrawer}
                        >
                            <Image style={{ width: 30, height: 30, left: 10, top: 3 }}
                                source={require('../Assets/DrawerIcon.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: '80%', display: 'flex', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, top: 5 }}> Deleted </Text>
                    </View>

                    <View style={{alignItems: 'flex-end'}}>
                        <TouchableOpacity style={{ width: 35 }}
                        onPress = {this.handleDeleteMenu}>
                            <Image style={{ width: 20, height: 30 }}
                                source={require('../Assets/Menu.png')} />
                        </TouchableOpacity>
                    </View>

                    
                </View>

                <View style = {this.state.isEmptyNoteDisplay}>
                <View style = {{height : 50, width : '50%', elevation : 1, borderWidth : 0.5, right : 10, top : 10}}>
                        <TouchableOpacity onPress = {this.handleEmptyRecycleBin}>
                            <Text style = {{fontSize : 20, top : 10}}> Empty Recycle Bin </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView>
                    <View>
                    
                        {
                            this.state.deletedNotes.map((deletedNotes, indexes) => {
                                if (deletedNotes.Deleted) {
                                    return (
                                        <Note index={indexes} Title={deletedNotes.Title} Note={deletedNotes.Note} navigation={this.props.navigation} gridDisplayValue={this.state.gridDisplay} Color={deletedNotes.Color} Reminder={deletedNotes.Reminder} />
                                    )
                                }
                            })}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default DeletedNotes