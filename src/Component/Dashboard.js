import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image, ScrollView, Button, FlatList} from 'react-native'
import styles from './StyleSheets'
import {SearchBar, Card} from 'react-native-elements'
import CreateNote from './CreateNote'
import {AsyncStorage} from 'react-native'
import firebase from '../Firebase'
// import Drawer from 'react-native-drawer'
import { Dropdown } from 'react-native-material-dropdown';
import ImagePicker from 'react-native-image-picker'
// import {InfiniteListView} from 'react-native-infinite-listview'

// var data = [{
//     value : 'List',
// },{
//     value : 'Grid',
// }];

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
            usersNote : []
            // cardDisplay : {
            //     display : 'none'
            // }
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
        var userData = firebase.firebase.auth().currentUser
        var userMailId = userData.email
        // console.log("User email id " + userMailId);
        
        if(!this.state.profileVisibility){
            this.setState({
                profileCardDisplay : styles.profileDisplay,
                profileVisibility : true,
                userEmail : userMailId
            })
        }else{
            this.setState({
                profileCardDisplay : {
                    display : 'none'
                },
                profileVisibility : false
            })
        }
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
    render(){
        AsyncStorage.getItem('UserData') .then((success) => {
            console.log('Success in Then method' + JSON.stringify(success));
            this.state.usersNote = success
            console.log("Users Array from Async Storage : " + this.state.users);
            // console.log("Note in Success " + success.Note);
        })
        .catch((error) => {
            console.log("Error in catch " + error);    
        })

        firebase.database.database().ref('Notes').orderByKey().on("")
        

        // const {navigation} = this.props
        // const note = navigation.getParam('Note', 'No Note')
        // const title = navigation.getParam('Title', 'No Title')
        // console.log("Note in Render " + note);
        // console.log("Title:",title)

        return(
            <View style = {styles.dashboardContainer}>
                <View style = {styles.dashboardSubContainer}>

                    {/* <Drawer type = "overlay" */}
                     {/* content = {<Text>ControlPanel</Text>}
                         content = "ControlPanel"
                         tapToClose = {true}
                         openDrawerOffset = {0.2}/>  */}

                        {/* <DrawerLayoutAndroid/> */}

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
                                <View style = {{right : 10, top : 4}}>
                                <TouchableOpacity onPress = {this.profileDisplay}>
                                <Image style = {{width : 30, height : 30}}
                                source = {require('../Assets/ProfileIcon.jpg')}/>
                                </TouchableOpacity>
                                </View>
                                </View>

                                
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
                                <View style = {this.state.profileCardDisplay}>
                                    <Card>
                                        <Text style = {{fontWeight : "bold", fontSize : 20, textDecorationLine : "underline", textAlign : "center", bottom : 15}}>
                                            Profile
                                        </Text>
                                        <Text style = {{bottom : 10}}>
                                            {this.state.userEmail}
                                        </Text>

                                        {/* <TouchableOpacity> */}
                                        <Button title = "Sign Out"
                                        onPress = {this.signOut}/>
                                        {/* </TouchableOpacity> */}

                                    </Card>
                                </View>
                        <ScrollView>
                        <View>
                        {/* <Card> */}
                        {
                        users.map((u, i) => {
                        return (
                        <View key={i} 
                        style={styles.userCard}
                        >
                            {/* <Image
                                style={styles.image}
                                resizeMode="cover"
                                source={{ uri: u.avatar }}
                            /> */}
                            <View style = {styles.notesCard}>
                            <Card>
                                <Text style={styles.name}>{u.name}</Text>
                                <Text style={styles.name}>{u.emailId}</Text>
                            </Card>
                            </View>
                            
                        
                        </View>
                        );
                        })
                        }
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

