import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, Button, FlatList, TouchableHighlight, RefreshControl } from 'react-native'
import styles from './StyleSheets'
import { Card } from 'react-native-elements'
import CreateNote from './CreateNote'
import { AsyncStorage } from 'react-native'
import firebase from '../Firebase'
import { Dropdown } from 'react-native-material-dropdown';
import ImagePicker from 'react-native-image-picker'
import userData from '../../UserServices'
const UserData = new userData
import ToggleSearchBar from './ToggleSearchBar'
import Note from './Note'
import DefaultSearchBar from './DefaultSearchBar'
import SearchNote from './SearchNote'

// const {status} = Permissions.getAsync(Permissions.NOTIFICATIONS)
var list = require('../Assets/List.png')
var grid = require('../Assets/Grid.png')
var pinnedArray

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
            pinnedArray: [],
            othersArray: []
        }
        console.disableYellowBox = true
    }

    updateSearch = () => {
        this.props.navigation.navigate('SearchNote')
    }

    takeNote = () => {
        this.props.navigation.navigate('CreateNote')
    }

    profileDisplay = () => {
        var userDataa = firebase.firebase.auth().currentUser
        var userEmailId = userDataa.email
        this.props.navigation.navigate('SignOutMenu', { userEmailId })
    }

    galleryIcon = () => {
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

    componentDidMount() {
        UserData.userData(response => {
            console.log("Response in Component Did Mount " + response);

            this.setState({
                usersNote: response
            })
        })
        // console.log("Details from Dashboard " + JSON.stringify(response));
        // console.log("Users Note in Dashboard Component Did Mount " + JSON.stringify(this.state.usersNote));
    }

    // static getDerivedStateFromProps(props, state){
    //     console.log("Get Derived State From Props");
    // }

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
        // const { navigation } = this.props
        
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
                        <SearchBar navigation = {this.props.navigation} />
                        </View> */}

                    <View>
                        {/* <DefaultSearchBar textdisplay = 'Search your Note' navigation = {this.props.navigation}/> */}
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

                    <ScrollView>
                        <View >
                            <Text> PINNED </Text>
                            <View style={styles.userCard}>
                                {
                                    Object.getOwnPropertyNames(this.state.usersNote).map((key, indexing) => {
                                        if (!this.state.usersNote[key].isArchive && !this.state.usersNote[key].Deleted && this.state.usersNote[key].isPin) {
                                            return (
                                                <Note index={indexing} Title={this.state.usersNote[key].Title} Note={this.state.usersNote[key].Note}
                                                navigation={this.props.navigation} gridDisplayValue={this.state.gridDisplay}
                                                Color={this.state.usersNote[key].Color} Reminder={this.state.usersNote[key].Reminder} />
                                            );
                                        }
                                    })
                                }
                            </View>
                        </View>

                        <View>
                            <Text> OTHERS </Text>
                            <View style={styles.userCard}>
                                {
                                    Object.getOwnPropertyNames(this.state.usersNote).map((key, indexing) => {
                                        if (!this.state.usersNote[key].isArchive && !this.state.usersNote[key].Deleted && !this.state.usersNote[key].isPin) {
                                            return (
                                                <Note index={indexing} Title={this.state.usersNote[key].Title} Note={this.state.usersNote[key].Note}
                                                    navigation={this.props.navigation} gridDisplayValue={this.state.gridDisplay}
                                                    Color={this.state.usersNote[key].Color} Reminder={this.state.usersNote[key].Reminder} />
                                            );
                                        }

                                    })
                                }
                            </View>
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