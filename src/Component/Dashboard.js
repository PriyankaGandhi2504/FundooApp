import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, Button, FlatList, TouchableHighlight } from 'react-native'
import styles from './StyleSheets'
import {Card} from 'react-native-elements'
import CreateNote from './CreateNote'
import { AsyncStorage } from 'react-native'
import firebase from '../Firebase'
// import Drawer from 'react-native-drawer'
import { Dropdown } from 'react-native-material-dropdown';
import ImagePicker from 'react-native-image-picker'
import userData from '../../UserServices'
const UserData = new userData
import ToggleSearchBar from './ToggleSearchBar'
import Note from './Note'

var list = require('../Assets/List.png')
var grid = require('../Assets/Grid.png')

const options = {
    title: 'Add Image',
    takePhotoButtonTitle: 'Take photo',
    chooseFromLibraryButtonTitle: 'Choose image',

}

class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: '',
            googleKeepImageVisibility: false,
            profileVisibility: false,
            userEmail: '',
            profileCardDisplay: {
                display: 'none'
            },
            avtarSource: null,
            usersNote: [],
            isLongPressed: false,
            longPressedStyle: {},
            selectedNotesIndex: [],
            flag: [],
            normalPressedStyle: {},
            countClick: 0,
            gridDisplay: false,
            gridView: {
                display: 'none'
            },
            icon: grid,
            toggleSearchBar: {
                display: 'none'
            },
            searchBarDisp: {
                display: styles.searchBar
            },
            newObjectArray: [],
        }
    }

    updateSearch = (text) => {
        this.state.search = text
        this.setState({
            ...this.state
        })
    }

    takeNote = () => {
        this.props.navigation.navigate('CreateNote')
    }

    profileDisplay = () => {
        var userDataa = firebase.firebase.auth().currentUser
        var userEmailId = userDataa.email
        // console.log("User email id " + userMailId);
        // if(!this.state.profileVisibility){
        //     this.setState({
        //         profileCardDisplay : styles.profileDisplay,
        //         profileVisibility : true,
        //         userEmail : userMailId
        //     })

        // }else{
        //     this.setState({
        //         profileCardDisplay : {
        //             display : 'none'
        //         },
        //         profileVisibility : false
        //     })
        // }
        this.props.navigation.navigate('SignOutMenu', { userEmailId })
    }

    galleryIcon = () => {
        // ImagePicker.launchCamera(options, (response) => {
        //     console.log("Response : " + response);
        //     if(response.didCancel){
        //         console.log('User cancelled Image Picker');
        //     }else if(response.error){
        //         console.log("Image Picker Error : " + response.error);
        //     }else{
        //         let source = {uri:response.uri}
        //         this.setState({
        //             avtarSource : source
        //         })
        //     }
        // })
        // alert(`gallery icon clicked`)

        ImagePicker.showImagePicker(options, (response) => {
            console.log("Response : " + response);
            if (response.didCancel) {
                console.log('User cancelled Image Picker');
            } else if (response.error) {
                console.log("Image Picker Error : " + response.error);
            } else {
                let source = { uri: response.uri }
                this.setState({
                    avtarSource: source
                })
            }
        })
    }

    signOut = () => {
        this.props.navigation.navigate('Login')
        firebase.firebase.auth().signOut()
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.flatListItem}>
                <Text style={styles.flatListItemText}> {item.title} </Text>
            </View>
        )
    }

    // static getDerivedStateFromProps(){
    //     console.log("Get State From Props");
    // }

     componentDidMount = async() => {
        var details = UserData.userData()
        console.log("Details from Dashboard " + JSON.stringify(details));

        await this.setState({
            usersNote: details
        })
        console.log("Users Note in Dashboard Component Did Mount " + JSON.stringify(this.state.usersNote));
    }

    // componentDidUpdate(){
    //     var details = UserData.userData()
    //     console.log(" Update  Details " + JSON.stringify(details));
    //     this.setState({
    //         usersNote : details
    //     })
    //     console.log("Users Note " + this.state.usersNote);
    //     console.log("Component Did Update");
    // }

    // static getDerivedStateFromProps(props, state){
    //     console.log("Get Derived State From Props");

    // }
    //     handleLongPress = (event, i) => {
    //         // console.log("I Index " + i);
    //         this.state.selectedNotesIndex.push(i)
    //         console.log("Selected notes indexes " + this.state.selectedNotesIndex);
    //         this.state.flag[i] = 1
    //         // console.log("Card Long Pressed") 
    //         // console.log( "Flag state of " + i + "is " + this.state.flag[i]);

    //         if (!this.state.isLongPressed) {
    //             // console.log("Long Pressed value " + this.state.isLongPressed);

    //             this.setState({
    //                 // isLongPressed : true,
    //                 longPressedStyle: styles.longPressedStyle,
    //                 toggleSearchBar: styles.toggleSearchBar,
    //                 searchBarDisplay: {
    //                     display: 'none'
    //                 },
    //                 countClick: 1,
    //             })
    //             // console.log("Long Pressed Value " + this.state.isLongPressed);

    //             // ,()=>{console.log(this.state.isLongPressed)})
    //             // console.log("in if statement ");
    //             // this.state.selectedNotesIndex = this.state.selectedNotesIndex.pop()
    //             // console.log("Selected Notes Index after Pop " + this.state.selectedNotesIndex);

    //         } else {
    //             this.state.flag[i] = 0

    //             this.setState({
    //                 isLongPressed: false,
    //                 normalPressedStyle: styles.normalPressedStyle,
    //                 toggleSearchBar: {
    //                     display: 'none'
    //                 },
    //                 searchBarDisplay: styles.searchBar
    //                 // longPressedStyle : {
    //                 //     display : 'none'
    //                 // }
    //             })

    //         }
    //     }

        handleNormalPress = (event) => {
            //this.state.flag[i] = 0
            //    var sliceArray = this.state.selectedNotesIndex.splice(i,1)
            //     console.log('Selected Index Array After Pop' + sliceArray);

            //    if(this.state.selectedNotesIndex == ''){
            //        console.log("Empty Array");
            //    } 

            // this.state.countClick = this.state.countClick + 1
            var noteObject1, skey, keysss;
            var noteObjectArray = []

            firebase.database.database().ref('Notes').on('child_added', function (snapshot) {
                noteObject1 = snapshot.val()
                console.log('NoteObject data', noteObject1)
                //  console.log('Title',noteObject1.Title)
                console.log('Keyysssssssss' + keysss);

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

                // var combinedNoteKeyObj = {
                //     title: '',
                //     note: '',
                //     key: ''
                // }


                for (var i = 0; i < keysss.length; i++) {
                    var keyIndex = keysss[i]
                    console.log('keyIndex Title', JSON.stringify(noteObject1[keyIndex]))
                    var ndata=noteObject1[keyIndex]
                    ndata['key']=keyIndex

                    // console.log("note " + JSON.stringify(ndata));

                    // combinedNoteKeyObj = [
                    //     {title: noteObject1[keyIndex].Title},
                    //     { note: noteObject1[keyIndex].Note },
                    //     { key: keyIndex }
                    // ]

                    noteObjectArray.push(ndata)

                }
                // console.log("Note object Array " + JSON.stringify(noteObjectArray));
            })
            console.log("Note object Array outside Loop" + JSON.stringify(noteObjectArray));
            // console.log("Note Object Array Is Archive .......... " + JSON.stringify(noteObjectArray.isArchive));
            

    this.setState({
        usersNote:noteObjectArray
    })
    this.props.navigation.navigate('CreateNote')

            //end of fetching
            //console.log('key of card',key)
            this.setState({
                isLongPressed: false,
                toggleSearchBar: {
                    display: 'none'
                },
                searchBarDisp: styles.searchBar,
                // longPressedStyle : {
                //     display : 'none'
                // }
            })

            // if(this.state.countClick === 1){
            //     this.setState({
            //         longPressedStyle : styles.longPressedStyle,
            //         toggleSearchBar : styles.toggleSearchBar,
            //         searchBarDisplay : {
            //             display : 'none'
            //         },
            //         countClick : 1
            //     })
            //     console.log("Count Click " + this.state.countClick);

            // }
            // console.log("count " + this.state.countClick);

            // if(this.state.countClick == 2){
            //     this.setState({
            //         countClick : 0
            //     })
            //     console.log("count " + this.state.countClick);
            // console.log("Note Object 1 Title " + JSON.stringify(noteObject1));


            // , {
            //     Title : title,
            //     Note : note,

            // }
            // )
            // // }

        }

    gridDisplay = () => {
        if (!this.state.gridDisplay) {
            this.setState({
                gridDisplay: true,
                icon: list
            })
        } else {
            this.setState({
                gridDisplay: false,
                icon: grid
            })
        }
    }



    render() {

        const { navigation } = this.props
        const color = navigation.getParam('Color', 'white')
        // console.log("Dashboard Card Color " + color);

        // var BgColor = color
        // console.log( "STATE COLOR " + this.state.BgColor);

        // console.log("Render ");

        // AsyncStorage.getItem('UserData') .then((success) => {
        //     console.log('Success in Then method' + JSON.stringify(success));
        //     this.state.usersNote = success
        //     console.log("Users Array from Async Storage : " + this.state.users);
        //     // console.log("Note in Success " + success.Note);
        // })
        // .catch((error) => {
        //     console.log("Error in catch " + error);    
        // })

        // firebase.database.database().ref('Notes').orderByKey().on("value", function(snapshot){
        //     console.log('DataBase data ' + JSON.stringify(snapshot.val()));
        //     var userObject = snapshot.val()
        //     // var usersData = JSON.stringify(snapshot.val())
        //     console.log("Has Property " + JSON.stringify(userObject));


        // console.log("User's Data : " + JSON.stringify(usersData));

        // })
        // console.log("Array in Render " + JSON.stringify(array));
        // this.setState({
        //     usersNote : array
        // })
        // console.log("Users Note in state " + JSON.stringify(this.state.usersNote));



        // const {navigation} = this.props
        // const note = navigation.getParam('Note', 'No Note')
        // const title = navigation.getParam('Title', 'No Title')
        // console.log("Note in Render " + note);
        // console.log("Title:",title)
        // console.log("Note in user Object " + userObject.Note);

        return (

            <View style={styles.dashboardContainer}>
                <View style={styles.dashboardSubContainer}>

                    <View style={this.state.toggleSearchBar}>
                        <ToggleSearchBar />
                    </View>

                    {/* <View>
                        <SearchBar navigation = {this.props.navigation}/>
                        </View> */}

                    <View>
                        <View style={styles.searchBar}>
                            <View>
                                <TouchableOpacity style={{ width: 50 }}
                                    onPress={this.props.navigation.openDrawer}>
                                    <Image style={{ width: 30, height: 30, left: 10, top: 3 }}
                                        source={require('../Assets/DrawerIcon.png')} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ left: 70, top: -23 }}>
                                <TouchableOpacity style={{ width: 120 }}
                                    onPress={this.updateSearch}>
                                    <Text>
                                        Search your Notes
                                    </Text>
                                </TouchableOpacity>
                            </View>


                            {/* <View style = {{ display : "flex", alignItems  : "flex-end",right : 50}}>
                            <TouchableOpacity>
                                <Image style = {{top : -45, width : 30, height : 30, backgroundColor : 'lightblue' }}
                                source = {require('../Assets/List.png')}/>
                               </TouchableOpacity>
                            </View> */}

                            {/* <View style = {{display : "flex", 
                            alignSelf : "flex-end",justifyContent : "center", 
                            top : -55, right : 50}}> */}
                            {/* <TouchableOpacity> */}
                            {/* <Dropdown
                                    data = {data} */}
                            {/* dropdownOffset = {{top : 150}}
                                    containerStyle = {{width : 70}}
                                     dropdownMargins = {{max : 16}}
                                     rippleCentered = {true}
                                    /> */}
                            {/* <Image style = {{width : 30, height : 20}}
                                    source = {require('../Assets/ArrowIcon.png')}/> */}
                            {/* </TouchableOpacity> */}
                            {/* </View> */}

                            <View style={styles.profileIcon}>
                                <View style={{ display: "flex", alignItems: "flex-end", right: 60, top: 4 }}>
                                    <TouchableOpacity onPress={this.gridDisplay}>
                                        <Image style={{ width: 30, height: 30 }}
                                            source={this.state.icon} />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ right: 10, top: -26 }}>
                                    <TouchableOpacity onPress={this.profileDisplay}>
                                        <Image style={{ width: 30, height: 30 }}
                                            source={require('../Assets/ProfileIcon.jpg')} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* <View style = {styles.searchBar}>
                                <View style = {{top : 5}}>
                                    <Image style = {{width : 20, height : 20,}}
                                    source = {require('../Assets/CrossIcon.png')}/>
                                </View>
                            </View> */}

                    {/* <View style = {styles.searchBar}>
                            <View>
                                <TouchableOpacity onPress = {this.props.navigation.openDrawer}>
                                <Image style = {{width : 30, height : 30, left : 10, top : 5}}
                                source = {require('../Assets/DrawerIcon.png')}/>
                                </TouchableOpacity>
                            </View>

                            <View style = {{left : 70, top : -23}}>
                                <TouchableOpacity style = {{width : "100%"}}
                                onPress = {()=>this.props.navigation.navigate('CreateNote')}>
                                    <Text
                                        onChangeText = {(text) => this.updateSearch(text)}
                                        value = {this.state.search}> 
                                        Search your notes 
                                    </Text>
                                    </TouchableOpacity>
                                </View>

                            <View>
                                <TouchableOpacity>
                                <Image style = {{width : 30, height : 30, display : "flex", alignSelf : "flex-end", top : -45, right : 10}}
                                    source = {require('../Assets/ProfileIcon.jpg')}/>
                                </TouchableOpacity>
                            </View>

                                </View> */}

                    <ScrollView>                        
                        <View style={styles.userCard}>
                            {
                                this.state.usersNote.map((usersNote, indexing) => {
                                    if(!usersNote.isArchive && !usersNote.Deleted){
                                        return (
                                                <Note index = {indexing} Title = {usersNote.Title} Note = {usersNote.Note} 
                                                navigation = {this.props.navigation} gridDisplayValue = {this.state.gridDisplay} 
                                                Color = {usersNote.Color} Reminder = {usersNote.Reminder}/>
                                        );
                                    }                                    
                                })
                            }
                        </View>
                    </ScrollView>

                    {/* <View style = {styles.googleKeepImage}>
                        <Image 
                        style = {{width : 100, height : 100}}
                        source = {require('../Assets/GoogleKeep.png')}
                        />
                        <Text style = {styles.addNotesLabel}> Notes You Add Appear Here </Text>
                    </View> */}
                </View>

                <View style={styles.takeNote}>
                    <View>
                        <TouchableOpacity onPress={this.takeNote}>
                            <Text style={{ fontSize: 19 }}> Take a note... </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.checkBoxImage}>
                        <TouchableOpacity onPress={this.checkBox}>
                            <Image style={{ width: 20, height: 20 }}
                                source={require('../Assets/Checkbox.png')} />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={this.PaintBrush}>
                            <Image style={{ width: 20, height: 20 }}
                                source={require('../Assets/PaintBrush.png')} />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={this.AudioListener}>
                            <Image style={{ width: 20, height: 20 }}
                                source={require('../Assets/AudioListener.png')} />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={this.galleryIcon}>
                            <Image style={{ width: 20, height: 20 }}
                                source={require('../Assets/GalleryIcon.png')} />
                        </TouchableOpacity>

                        {/* <Modal visible = {this.state.modalVisible}
                            animationType="slide"
                            transparent={false}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            }}>
                            </Modal> */}
                    </View>
                </View>
            </View>
        )
    }
}

export default Dashboard