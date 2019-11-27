import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image, ScrollView, Button, FlatList, TouchableHighlight} from 'react-native'
import styles from './StyleSheets'
import {SearchBar, Card} from 'react-native-elements'
import CreateNote from './CreateNote'
import {AsyncStorage} from 'react-native'
import firebase from '../Firebase'
// import Drawer from 'react-native-drawer'
import { Dropdown } from 'react-native-material-dropdown';
import ImagePicker from 'react-native-image-picker'
import userData from '../../UserServices'
const UserData = new userData
import MasonryList from "react-native-masonry-list";
// import {InfiniteListView} from 'react-native-infinite-listview'

// var data = [{
//     value : 'List',
// },{
//     value : 'Grid',
// }];
var list = require('../Assets/List.png')
var grid = require('../Assets/Grid.png')
const options = {
    title : 'Add Image',
    takePhotoButtonTitle : 'Take photo',
    chooseFromLibraryButtonTitle : 'Choose image',
    
}

const data = [
    {id : 1, title :'First Item'},
    {id : 2, title :'Second Item'},
    {id : 3, title :'Third Item'},
    {id : 4, title :'Forth Item'},
    {id : 5, title :'Fifth Item'},
]

const users = [
    {name : 'Abc', emailId : 'abc@abc.com'},
    {name : 'Xyz', emailId : 'xyz@xyz.com'},
    {name : 'Dummy', emailId : 'dummy@dummy.com'},
    {name : 'Vaishnavi', emailId : 'vaishnavibhosale@gmail.com'}
]

var array;

class Dashboard extends Component{

    constructor (props){
        super(props)
        this.state = {
            search : '',
            googleKeepImageVisibility : false,
            profileVisibility : false,
            userEmail : '',
            profileCardDisplay : {
                display : 'none'
            },
            avtarSource : null,
            usersNote : [],
            isLongPressed : false,
            longPressedStyle : {},
            selectedNotesIndex : [],
            flag : [],
            normalPressedStyle : {},
            countClick : 0,
            gridDisplay : false,
            gridView : {
                display : 'none'
            },
            icon : list,
            //Icon : grid,
            // cardDisplay : {
            //     display : 'none'
            // }
        }
        // console.log("Constructor ");
        
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
        this.props.navigation.navigate('SignOutMenu', {userEmailId})
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

        ImagePicker.showImagePicker(options,(response) => {
            console.log("Response : " + response);
            if(response.didCancel){
                console.log('User cancelled Image Picker');
            }else if(response.error){
                console.log("Image Picker Error : " + response.error);
            }else{
                let source = {uri:response.uri}
                this.setState({
                    avtarSource : source
                })
            }
        })
    }

    signOut = () => {
        this.props.navigation.navigate('Login')
        firebase.firebase.auth().signOut()
    }

    renderItem = ({item}) => {
        return(
            <View style = {styles.flatListItem}>
                <Text style = {styles.flatListItemText}> {item.title} </Text>
            </View>
        )
    }

     componentDidMount(){
        // console.log("await ");
        
        var details = UserData.userData()
        // console.log("received");
        
        console.log("Details " + JSON.stringify(details));
        this.setState({
            usersNote : details
        })
        console.log("Users Note " + this.state.usersNote);
        // console.log("Component Did Mount");
        
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

    handleLongPress = (event, i) => {
        // console.log("I Index " + i);
        this.state.selectedNotesIndex.push(i)
        // console.log( "Selected notes indexes " + this.state.selectedNotesIndex);
        this.state.flag[i] = 1
        // console.log("Card Long Pressed") 
        // console.log( "Flag state of " + i + "is " + this.state.flag[i]);
        
        if(!this.state.isLongPressed){
            // console.log("Long Pressed value " + this.state.isLongPressed);
            
            this.setState({
                // isLongPressed : true,
                longPressedStyle : styles.longPressedStyle,
            })
            // ,()=>{console.log(this.state.isLongPressed)})
            // console.log("in if statement ");
            
        }else{
            this.state.flag[i] = 0

            this.setState({
                isLongPressed : false,
                normalPressedStyle : styles.normalPressedStyle

                // longPressedStyle : {
                //     display : 'none'
                // }
            })
        }
    }

    handleNormalPress = (event, i, title, note) => {
        this.state.flag[i] = 0
        // this.state.countClick = this.state.countClick + 1
        this.setState({
            isLongPressed : false,
            // longPressedStyle : {
            //     display : 'none'
            // }
        })
        // console.log("count " + this.state.countClick);

        // if(this.state.countClick == 2){
        //     this.setState({
        //         countClick : 0
        //     })
        //     console.log("count " + this.state.countClick);
            
            // this.props.navigation.navigate('CreateNote', {
            //     Title : title,
            //     Note : note
            // })
        // }
        
    }

    gridDisplay = () => {
        if(!this.state.gridDisplay){
            this.setState({
                gridDisplay : true,
                icon : grid
            })

        }else{
            this.setState({
                gridDisplay : false,
                icon : list
            })
        }
    }

    

    render(){
        

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
        
        return(
            <View style = {styles.dashboardContainer}>
                <View style = {styles.dashboardSubContainer}>

                    {/* <Drawer type = "overlay" */}
                     {/* content = {<Text>ControlPanel</Text>}
                         content = "ControlPanel"
                         tapToClose = {true}
                         openDrawerOffset = {0.2}/>  */}

                        {/* <DrawerLayoutAndroid/> */}

                        <View>
                        <View style = {styles.searchBar}>
                            <View>
                                <TouchableOpacity style = {{width : 50}}
                                onPress = {this.props.navigation.openDrawer}>
                                <Image style = {{width : 30, height : 30, left : 10, top : 3}}
                                source = {require('../Assets/DrawerIcon.png')}/>
                                </TouchableOpacity>
                            </View>

                            <View style = {{left : 70, top : -23}}>
                                <TouchableOpacity style = {{width : 120}}
                                onPress = {this.updateSearch}>
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

                            <View style = {styles.profileIcon}>
                            <View style = {{display : "flex", alignItems : "flex-end", right : 60, top : 4}}>
                            <TouchableOpacity onPress = {this.gridDisplay}>
                                <Image style = {{width : 30, height : 30}}
                                source = {this.state.icon}/>
                               </TouchableOpacity>
                            </View>

                                <View style = {{right : 10, top : -26}}>
                                <TouchableOpacity onPress = {this.profileDisplay}>
                                <Image style = {{width : 30, height : 30}}
                                source = {require('../Assets/ProfileIcon.jpg')}/>
                                </TouchableOpacity>
                                </View>
                                </View>
                            </View>

                            {/* <View style = {styles.searchBar}>
                                <View style = {{top : 5}}>
                                    <Image style = {{width : 20, height : 20,}}
                                    source = {require('../Assets/CrossIcon.png')}/>
                                </View>
                            </View> */}
                        </View>
                        
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
                                {/* <View>
                                    <FlatList
                                    data = {data}
                                    style = {styles.flatListContainer}
                                    renderItem = {this.renderItem}

                                    />
                                </View> */}
                                {/* <View style = {this.state.profileCardDisplay}>
                                    <Card>
                                        <Text style = {{fontWeight : "bold", fontSize : 20, textDecorationLine : "underline", textAlign : "center", bottom : 15}}>
                                            Profile
                                        </Text>
                                        <Text style = {{bottom : 10}}>
                                            {this.state.userEmail}
                                        </Text> */}

                                        {/* <TouchableOpacity> */}
                                        {/* <Button title = "Sign Out"
                                        onPress = {this.signOut}/> */}
                                        {/* </TouchableOpacity> */}

                                    {/* </Card>
                                </View> */}
                        <ScrollView>
                        {/* <MasonryList> */}
                        {/* <View> */}
                        <View style = {this.state.gridDisplay === false ? {width : "100%"} : styles.gridView}>
                            {/* <FlatList/> */}
                        {/* <Card> */}
                        { 
                            this.state.usersNote.map((u, i) => {
                                return (
                                    <View key={i} 
                                    style={styles.userCard}>
                                    {/* <Image
                                    style={styles.image}
                                    resizeMode="cover"
                                    source={{ uri: u.avatar }}
                                    /> */}
                                    <TouchableOpacity onLongPress = {(event) => this.handleLongPress(event, i)}
                                    onPress = {(event) => this.handleNormalPress(event, i, u.Title, u.Note)}>
                                    {/* style = {this.state.flag[i] === 1 ? this.state.longPressedStyle : this.handleNormalPress}> */}
                                    {/* <View style = {styles.notesCard}> */}
                                        {/* <FlatList
                                        data = {this.state.usersNote}
                                        renderItem = {this.renderRow}> */}
                                        
                                        <Card
                                        containerStyle = {this.state.flag[i] === 1 ? this.state.longPressedStyle : styles.normalPressedStyle}>
                                            <Text style={{fontSize : 16}}>{u.Title}</Text>
                                            <Text style={{fontSize : 12, marginTop : 10}}>{u.Note}</Text>
                                        </Card>
                                        
                                        {/* </FlatList> */}
                                       
                                    {/* </View> */}
                                    </TouchableOpacity>
                                    </View>
                                );
                            })
                        }
                        <View style={{height:30}}>

                        </View>
                        </View>
                        {/* </MasonryList> */}
                        </ScrollView>
       
                            {/* </Card> */}
                            {/* <View style = {{width : "50%"}}>
                                <Card title = 'title'/>
                                <Card title = "title"/>
                            </View>

                            <View style = {{width : "50%"}}>
                                <Card title = "title"/>
                                <Card title = "title"/>
                            </View>

                            <View style = {{width : "50%"}}>
                                <Card title = "title"/>
                                <Card title = "title"/> 
                            </View>

                            <View style = {{width : "50%"}}>
                                <Card title = "title"/>
                                <Card title = "title"/>
                            </View>

                            <View style = {{width : "50%"}}>
                                <Card title = "title"/>
                                <Card title = "title"/> 
                            </View>

                            <View style = {{width : "50%", bottom : 100}}>
                                <Card title = "title"/>
                                <Card title = "title"/>
                            </View> */}
                        
                        
                    {/* <View style = {styles.googleKeepImage}>
                        <Image 
                        style = {{width : 100, height : 100}}
                        source = {require('../Assets/GoogleKeep.png')}
                        />
                        <Text style = {styles.addNotesLabel}> Notes You Add Appear Here </Text>
                    </View> */}
                    </View>

                    <View style = {styles.takeNote}>
                        <View>
                        <TouchableOpacity onPress = {this.takeNote}>
                            <Text style = {{fontSize : 19}}> Take a note... </Text>
                        </TouchableOpacity>
                        </View>

                        <View style ={styles.checkBoxImage}>
                            <TouchableOpacity onPress = {this.checkBox}>
                                <Image style = {{width : 20, height : 20}}
                                source = {require('../Assets/Checkbox.png')}/>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity onPress = {this.PaintBrush}>
                                <Image style = {{width : 20, height : 20}}
                                source = {require('../Assets/PaintBrush.png')}/>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity onPress = {this.AudioListener}>
                                <Image style = {{width : 20, height : 20}}
                                source = {require('../Assets/AudioListener.png')}/>
                            </TouchableOpacity>
                        </View>
 
                        <View>
                            <TouchableOpacity onPress = {this.galleryIcon}>
                                <Image style = {{width : 20, height : 20}}
                                source = {require('../Assets/GalleryIcon.png')}/>
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

