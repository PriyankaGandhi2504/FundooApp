import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import styles from './StyleSheets'
import firebase from '../Firebase'
import {Card} from 'react-native-elements'
import CreateNote from './CreateNote'
import ToggleSearchBar from './ToggleSearchBar'

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
            isSelected : [],
            toggleSearchBar: {
                display: 'none'
            },
        }
    }

    async componentDidMount() {
        var details = await UserData.userData()
        // console.log("Details " + JSON.stringify(details));
        this.setState({
            usersNote: details
        })
        console.log("Users Note " + JSON.stringify(this.state.usersNote));
    }

    handleLongPress = (event, i) => {
        // console.log("I Index " + i);
        this.state.selectedNotesIndex.push(i)
        console.log("Selected notes indexes " + this.state.selectedNotesIndex);
        this.state.flag[i] = 1
        this.state.isSelected[i] = true
        // console.log( "Flag state of " + i + "is " + this.state.flag[i]);
        console.log('Is Selected Status of Index ' + this.state.isSelected[i]);
        if (!this.state.isLongPressed) {
            // console.log("Long Pressed value " + this.state.isLongPressed);

            this.setState({
                longPressedStyle: styles.longPressedStyle,
                normalPressedStyle : {
                    display : 'none'
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
        //this.state.flag[i] = 0
        //    var sliceArray = this.state.selectedNotesIndex.splice(i,1)
        //     console.log('Selected Index Array After Pop' + sliceArray);
        //    if(this.state.selectedNotesIndex == ''){
        //        console.log("Empty Array");
        //    } 
        var ndata;
        console.log('value of i',i)
       // console.log('Note Title' + JSON.stringify(ndata[keyIndex].Title));
        // this.state.countClick = this.state.countClick + 1
        var noteObject1, skey, keysss;
        var noteObjectArray = []
         
        firebase.database.database().ref('Notes').on('child_added', function (snapshot) {
            noteObject1 = snapshot.val()
            // console.log('NoteObject data', noteObject1)     note, title, fetchedUserId
            //  console.log('Title',noteObject1.Title)
            // console.log('Keyysssssssss' + keysss);

            firebase.database.database().ref('Notes').on('value', function (snapshot) {
                // console.log("Order By Child " + snapshot.key + "Value " + JSON.stringify(snapshot.val().notes));
                // array = snapshot.val()
                noteObject1 = snapshot.val()
                keysss = Object.keys(noteObject1)
                console.log('keyssss', keysss)

                // for (var i = 0; i < keysss.length; i++) {
                //     if (skey === keysss) {
                //         console.log('matched key')
                //     }
                // }
                // console.log("Array order by child " + JSON.stringify(array));
                //console.log("User's Object : " + JSON.stringify(keysss));
                // console.log("Notes Object " + JSON.stringify(Object.keys(noteObject1)));
                // noteObj1.push(keysss)
                // if(keysss === noteObject1.key){
                //     noteObj1.push(keysss)
                //     console.log('in ID',noteObj1)
                // }
                // console.log('Note object ' + noteObj1)
                // // console.log("User Object Fetched Uid " + userObject.fetchedUserId);
            })

            //skey = snapshot.key
            //  var childKey = snapshot.child("Notes").key;
            //  console.log('childkey:',childKey);
            //console.log('..................child key', skey)
           var j;
            for (j = 0; j < keysss.length; j++) {
                var keyIndex = keysss[j]
                console.log('keyIndex Title', JSON.stringify(noteObject1[keyIndex]))
                ndata = noteObject1[keyIndex]
                ndata['key'] = keyIndex
                noteObjectArray.push(ndata)
                //console.log('Note Title inside loop ' + JSON.stringify(ndata.Title));
            }
            console.log("note " + JSON.stringify(ndata));
            // console.log("Note object Array " + JSON.stringify(noteObjectArray));
        })
        console.log('Note Title' + JSON.stringify(noteObjectArray[i].key)); //particular card's key

        console.log("Note object Array outside Loop" + JSON.stringify(noteObjectArray));

        this.setState({
            usersNote: noteObjectArray
        })
        console.log('Note Title oiutside loop ' + JSON.stringify(noteObjectArray[i].key)); //particular card's key

        
        if(this.state.isSelected[i] === true){
            this.state.isSelected[i] = false
            this.state.flag[i] = 0
            if(this.state.isSelected[i] === false){
                this.setState({
                    isLongPressed: false,
                    toggleSearchBar: {
                        display: 'none'
                    },
                    searchBar: styles.searchBar,
                    normalPressedStyle : styles.normalPressedStyle,
                    
                    longPressedStyle : {
                        display : 'none'
                    }
                })
            }            
        }else{
            console.log('Note Title in else part ' + JSON.stringify(noteObjectArray[i].key)); //particular card's key


            this.props.navigation.navigate('CreateNote',
            // {
            //     fetchedNote : noteObjectArray[i].Note,
            //     fetchedTitle : noteObjectArray[i].Title,
            //     fetchedKey : noteObjectArray[i].key
            // }
            )
        }
        //end of fetching
        
        // , {
        //     Title : title,
        //     Note : note,
        // }
        // )
        // // }
    }

    render() {
        
        // const { navigation } = this.props
        // const color = navigation.getParam('Color', 'white')
        const {index, Title, Note, gridDisplayValue, Color} = this.props
        // console.log('Color in Note ' + Color)
        return (
            <TouchableOpacity onLongPress={(event) => this.handleLongPress(event, index)}
                    onPress={(event) => this.handleNormalPress(event, index)}
                    style={gridDisplayValue === false ? {width: "100%"} : styles.gridView}>
                <View>
                    <Card
                    containerStyle={[{width : '90%', display : 'flex', flexWrap : "wrap", backgroundColor : Color}, this.state.flag[index] === 1 ? this.state.longPressedStyle : styles.normalPressedStyle]}>
                        <Text style={{ fontSize: 16 }}>{Title}</Text>
                        <Text style={{ fontSize: 12, marginTop: 10 }}>{Note}</Text>
                    </Card>

                    <View style={{ height: 30 }}/>
                </View>
            </TouchableOpacity>
        )
    }
}

export default Note