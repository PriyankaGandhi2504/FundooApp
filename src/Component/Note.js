import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import styles from './StyleSheets'
import firebase from '../Firebase'
import { Card } from 'react-native-elements'
import CreateNote from './CreateNote'
import ToggleSearchBar from './ToggleSearchBar'
import { Chip } from 'react-native-paper'
import FastImage from 'react-native-fast-image'

var list = require('../Assets/List.png')
var grid = require('../Assets/Grid.png')
var noteKeyArray = ''

class Note extends Component {

    constructor(props) {
        super(props)
        this.state = {
            usersNote: [],
            flag: [],
            longPressedStyle: {},
            isLongPressed: false,
            normalPressedStyle: {},
            gridDisplay: false,
            gridView: {
                display: 'none'
            },
            selectedNotesIndex: [],
            countClick: 0,
            icon: grid,
            isSelected: [],
            toggleSearchBar: {
                display: 'none'
            },
        }
        noteObjectArray = this.props.note
    }

    async componentDidMount() {
        var details = await UserData.userData()
        this.setState({
            usersNote: details
        })
    }

    handleLongPress = (event, i) => {
        this.state.selectedNotesIndex.push(i)
        this.state.flag[i] = 1
        this.state.isSelected[i] = true
        if (!this.state.isLongPressed) {

            this.setState({
                longPressedStyle: styles.longPressedStyle,
                normalPressedStyle: {
                    display: 'none'
                },
                toggleSearchBar: styles.toggleSearchBar,
                searchBar: {
                    display: 'none'
                },
            })
        } else {
            this.state.flag[i] = 0
            this.setState({
                isLongPressed: false,
                normalPressedStyle: styles.normalPressedStyle,
                toggleSearchBar: {
                    display: 'none'
                },
                searchBar: styles.searchBar
            })
        }
    }

    handleNormalPress = (event, i) => {
        var ndata;
        var noteObject1, keys;
        var noteObjectArray = []

        firebase.database.database().ref('Notes').on('child_added', function (snapshot) {
            noteObject1 = snapshot.val()
            firebase.database.database().ref('Notes').on('value', function (snapshot) {
                noteObject1 = snapshot.val()
                keys = Object.keys(noteObject1)
                // keysss = Object.keys(noteObject1)
            })
            // var keys = Object.keys(noteObject1)
            // console.log('Key ', key);
            var j;
            for (j = 0; j < keys.length; j++) {
                // console.log('Keys Of J ', key[j]);
                // console.log('note key ', noteKeyArray);
                // if(keys[j] === noteKeyArray){
                    var keyIndex = keys[j]
                ndata = noteObject1[keyIndex]
                ndata['key'] = keyIndex
                noteObjectArray.push(ndata)
                // } 
            }
        })
        console.log('Note Object Array In Note ', noteObjectArray);
        this.setState({
            usersNote: noteObjectArray[i]
        })
        console.log('Users Note In Note ', noteObjectArray[i]);
        if (this.state.isSelected[i] === true) {
            this.state.isSelected[i] = false
            this.state.flag[i] = 0
            if (this.state.isSelected[i] === false) {
                this.setState({
                    isLongPressed: false,
                    toggleSearchBar: {
                        display: 'none'
                    },
                    searchBar: styles.searchBar,
                    normalPressedStyle: styles.normalPressedStyle,
                    longPressedStyle: {
                        display: 'none'
                    }
                })
            }
        } else {
            this.props.DeletedValue === true ? this.props.navigation.navigate('RestoreTrash', {
                clickedNote: noteObjectArray[i]
            })
            : this.props.navigation.navigate('CreateNote',
                {
                    clickedNote: noteObjectArray[i]
                }
            )
        }
    }

    render() {
        const {index, Title, Note, gridDisplayValue, Color, Reminder, DeletedValue, chosenImage,noteKey} = this.props  
        noteKeyArray = this.props.noteKey
        console.log('Note key Array in Render ', noteKeyArray);
        
        return (
            <TouchableOpacity onLongPress={(event) => this.handleLongPress(event, index)}
                onPress={(event) => this.handleNormalPress(event, index)}
                style={gridDisplayValue === false ? { width: "100%" } : { width: '50%' }}>
                <View>
                    <Card
                        containerStyle={[{ width: '90%', display: 'flex', flexWrap: "wrap", backgroundColor: Color}, this.state.flag[index] === 1 ? this.state.longPressedStyle : styles.normalPressedStyle]}>
                        <FastImage style = {chosenImage !== '' ? gridDisplayValue ? {width : 130, height : 200} : {width : 280, height : 270} : {display : 'none'}}
                        source = {chosenImage}/>
                        <Text style={{ fontSize: 16 }}>{Title}</Text>
                        <Text style={{ fontSize: 12, marginTop: 10 }}>{Note}</Text>
                        <View style={Reminder !== '' ? { width: 175 } : { display: 'none' }}>
                            <Chip icon={require('../Assets/Reminder.png')}
                                style={{ width: '45%' }}
                                style={{ borderWidth: 0.5, borderColor: 'black', backgroundColor: Color, top: 5, left: -10 }}
                            >
                                {Reminder}
                            </Chip>
                        </View>
                    </Card>

                    <View style={{ height: 30 }} />
                </View>
            </TouchableOpacity>
        )
    }
}

export default Note