import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import styles from './StyleSheets'
import firebase from '../Firebase'
import { Card } from 'react-native-elements'
import CreateNote from './CreateNote'
import ToggleSearchBar from './ToggleSearchBar'
import { Chip } from 'react-native-paper'

var list = require('../Assets/List.png')
var grid = require('../Assets/Grid.png')

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
            // Deleted : props.DeletedValue
        }
        
        // console.log('Deleted Value ' + this.props.DeletedValue)
    }

    async componentDidMount() {
        var details = await UserData.userData()
        // console.log("Details " + JSON.stringify(details));
        this.setState({
            usersNote: details
        })
        // console.log("Users Note " + JSON.stringify(this.state.usersNote));
    }

    handleLongPress = (event, i) => {
        // console.log("I Index " + i);
        this.state.selectedNotesIndex.push(i)
        // console.log("Selected notes indexes " + this.state.selectedNotesIndex);
        this.state.flag[i] = 1
        this.state.isSelected[i] = true
        // console.log( "Flag state of " + i + "is " + this.state.flag[i]);
        // console.log('Is Selected Status of Index ' + this.state.isSelected[i]);
        if (!this.state.isLongPressed) {
            // console.log("Long Pressed value " + this.state.isLongPressed);

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
            // console.log("Long Pressed Value " + this.state.isLongPressed);
            // ,()=>{console.log(this.state.isLongPressed)})
            // console.log("in if statement ");
            // this.state.selectedNotesIndex = this.state.selectedNotesIndex.pop()
            // console.log("Selected Notes Index after Pop " + this.state.selectedNotesIndex);

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
        var noteObject1, keysss;
        var noteObjectArray = []

        firebase.database.database().ref('Notes').on('child_added', function (snapshot) {
            noteObject1 = snapshot.val()
            firebase.database.database().ref('Notes').on('value', function (snapshot) {
                noteObject1 = snapshot.val()
                keysss = Object.keys(noteObject1)
            })

            var j;
            for (j = 0; j < keysss.length; j++) {
                var keyIndex = keysss[j]
                ndata = noteObject1[keyIndex]
                ndata['key'] = keyIndex
                noteObjectArray.push(ndata)
            }
        })

        this.setState({
            usersNote: noteObjectArray
        })

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
            // console.log('Deleted Value in Else ' + Deleted)
            // console.log('Note Title in else part ' + JSON.stringify(noteObjectArray[i].Note)); //particular card's key
            this.props.DeletedValue === true ? this.props.navigation.navigate('RestoreTrash', {
                clickedNote: noteObjectArray[i]
            })
            : this.props.navigation.navigate('CreateNote',
                {
                    clickedNote: noteObjectArray[i]
                }
            )
        }
    }//end of normalPress

    render() {
        const {index, Title, Note, gridDisplayValue, Color, Reminder, DeletedValue, chosenImage} = this.props
        return (
            <TouchableOpacity onLongPress={(event) => this.handleLongPress(event, index)}
                onPress={(event) => this.handleNormalPress(event, index)}
                style={gridDisplayValue === false ? { width: "100%" } : { width: '50%' }}>
                <View>
                    <Card
                        containerStyle={[{ width: '90%', display: 'flex', flexWrap: "wrap", backgroundColor: Color}, this.state.flag[index] === 1 ? this.state.longPressedStyle : styles.normalPressedStyle]}>
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