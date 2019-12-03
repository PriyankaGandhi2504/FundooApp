import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image, TextInput, ScrollView} from 'react-native'
import styles from './StyleSheets'
import {Input} from 'react-native-elements'
import firebase from '../Firebase'
import Dashboard from './Dashboard'
// import Snackbar from 'react-native-snackbar';
import {AsyncStorage} from 'react-native';
import ColorPalette from 'react-native-color-palette'
// import Snackbar from './SnackBar'
import noteData from '../../UserServices'
const NoteData = new noteData

var date = new Date().getMinutes()
var note;
var title;
var index; 

class CreateNote extends Component {
    constructor(props){
        super(props)
        this.state = {
            Title : '',
            Note : '',
            menuIconVisibility : false,
            menuListDisplay : {
                display:'none'
            },
            notes : [],
            fetchedUserId : '',
            backgroundColor : 'white',
            backgroundChange : false,
            note : '',
            title : '',
            nextState:'',
            indexing : '',
            notesKeys : []
            // snackBarDisplay : true
        }
    }

    handleBackArrowToCreate = () => {
        // this.props.navigation.navigate('Dashboard')
        var noteObj = {
            Title : this.state.Title,
            Note : this.state.Note
        }
        if(this.state.Note === '' && this.state.Title === ''){
            alert(`Empty Note Discarded`)
            // alert(`Selected Color ${this.state.backgroundColor}` )
            this.props.navigation.navigate('Dashboard')
            
        }else{
            // var noteObj = {
            //     Note : this.state.Note,
            //     Title : this.state.Title,
            // }

            // AsyncStorage.getItem('UserId').then((success) => {
            //     this.state.fetchedUserId = success
            //     // console.log("Fetched user id in Create Note " + this.state.fetchedUserId);  
            // })
            // var userID = JSON.parse(this.state.fetchedUserId)
            // console.log("Parsed User ID " + userID);
            
            // var id=fetchedUserId

            console.log("Fetched User Id : " + this.state.fetchedUserId);
            // firebase.database.storage()
            // this.setState({
            //     snackBarDisplay : {
            //         display : 'none'
            //     }
            // })
            // firebase.database.database().ref('/Notes').push(noteObj)
            // var notesValue = noteObj

            var array = this.state.notes
            
            array.push(noteObj)
            // console.log("Arr Data " + arr);
            
            this.setState({
                notes : array
            })
            console.log("Array Of Notes " + JSON.stringify(this.state.notes));
            var noteObject = {
                // notes : this.state.notes,
                // notes : [{name : 'abc'}, {name : 'xyz'}],
                 Title : this.state.Title,
                Note : this.state.Note,
                fetchedUserId : this.state.fetchedUserId,
                // Color : this.state.backgroundColor
            }
            const pushedData = firebase.database.database().ref('/Notes').push(noteObject)
            const key=pushedData.key
            console.log('New Pushed Data :',pushedData)
            console.log('key of pushed data',key)
            
        }
    }

    handleBackArrowToUpdate =() =>{

        var noteDetails = NoteData.noteData()
        // console.log('note details',noteDetails)
        // this.setState({
        //     noteObject : noteDetails
        // })
        

        console.log("Notes Keys In Create Note " + noteDetails);
        

        // AsyncStorage.setItem('UserData', noteObject)
        

       

       // var pushednoteobject=NoteData.noteData()

        noteObject={
                Note:this.state.Note,
                Title:this.state.Title,
                fetchedUserId:this.state.fetchedUserId
        }

        
            firebase.database.database().ref('Notes').child(key).update(noteObject)
        
        

        // this.setState({
        //     notesKeys:object
        // })

    
        // var newData=this.state.notesKeys
        // var updates = {};
        // updates["/Notes/" + key] = {
        //   newData
        // };
        
        // if(pushednoteobject === currentNoteKey){
        // firebase.database.database().ref('Notes')
        //     pushedData.child('Title').update({
        //         'Note' : this.state.Note,
        //         'Title' : this.state.Title,
        //     })

    

// return firebaseApp
//   .database()
//   .ref()
//   .update(updates);
        // }
        
            
        // })
        // var userData = firebase.firebase.auth().currentUser
        // userId = userData.uid
        // var usersNotes = firebase.firebase.auth().currentUser
        // AsyncStorage.setItem('UserData', usersNotes)
        // AsyncStorage.setItem('UserId', JSON.stringify(noteObj))

        this.props.navigation.navigate('Dashboard')
        // , {
        //     Note : this.state.Note,
        //     Title : this.state.Title
        // })

        // vsar parsedData = JSON.parse(data)
        // console.log("Parsed Data " + parsedData);
        
        // var noteObject = {
        //     notes : this.state.notes,
        //     userId : usersNotes.uid
        // }

        // var usersNotes = firebase.firebase.auth().currentUser

        // if(usersNotes != null){
        //     var abc = AsyncStorage.getItem('userId')
        //     if(abc != null){
        //         console.log("Abc Data" + JSON.stringify(abc));
        //     }                
        // }

        // console.log("Notes " + JSON.stringify(notes));
        
        // var notes = AsyncStorage.getItem('userId')
        // console.log("Notes " + notes);
        // console.log('Note Object ' + JSON.stringify(noteObj));
        // alert(AsyncStorage.getAllKeys())

    }
    // handleNoteChange = (text) => {
    //     this.state.Note = text
    //     this.setState({
    //         ...this.state
    //     })
    // }

    menuIcon = () => {
        if(!this.state.menuIconVisibility){
            this.setState({
                menuListDisplay : styles.menuList,
                menuIconVisibility : true
            })
        }else{
            this.setState({
                menuIconVisibility : false,
                menuListDisplay : {
                    display:'none'
                }
            })
        }
    }

    changeColor = (color) => {
        
        if(!this.state.backgroundChange){
            this.setState({
                backgroundColor : color
            })
            alert(`Color ${color}`)
        }else{
            this.setState({
                backgroundColor : 'white'
            })
        }
    }

    componentDidMount = () => {
        const {navigation} = this.props
        note = navigation.getParam('Note','')
        title = navigation.getParam('Title','')
        index = navigation.getParam('i', '')

        this.setState({
            
                Note : note,
                Title : title,
                indexing : index
           
        })
    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log('........nextState',nextState); //will show the new state
    //     console.log(this.state); //will show the previous state
    //   }
    render(){

        AsyncStorage.getItem('UserId').then((success) => {
            this.state.fetchedUserId = success
            // console.log("Fetched user id in Create Note " + this.state.fetchedUserId);  
        })

        // const {navigation} = this.props
        // note = navigation.getParam('Note' , 'No Note')
        // title = navigation.getParam('Title', 'No Title')


        // console.log("Note in Create Note " + note);
        // console.log("Title in Create Note " + title);
        

        // this.setState({
        //     Note : note,
        //     Title : title
        // })

        // AsyncStorage.getItem('UserData') .then((success) => {
        //     console.log('Success in Then method' + success);
            
        // })
        // .catch((error) => {
        //     console.log("Error in catch " + error);
            
        // })

        return(
            // <ScrollView>
            <View style = {styles.createNoteContainer}>
                <View style = {{width : "100%", height : "100%", backgroundColor : this.state.backgroundColor}}>
                    <View style = {styles.headerContainer}>
                        <View style = {styles.arrowContainer}>
                            <TouchableOpacity onPress = {this.handleBackArrowToCreate}>
                                <Image style = {{width : 35, height : 35}}
                                source = {require('../Assets/BackArrow.png')}/>
                            </TouchableOpacity> 
                        </View>
                        
                        <View style = {styles.restContainer}>
                        <TouchableOpacity>
                                <Image style = {{width : 25, height : 25, marginTop : 6}}
                                source = {require('../Assets/Pinned.png')}/>
                            </TouchableOpacity> 
                            <TouchableOpacity>
                                <Image style = {{width : 25, height : 25, marginTop : 5}}
                                source = {require('../Assets/Reminder.png')}/>
                            </TouchableOpacity> 
                            <TouchableOpacity>
                                <Image style = {{width : 25, height : 25, marginTop : 3}}
                                source = {require('../Assets/Archive.png')}/>
                            </TouchableOpacity> 
                        </View>
                    </View>

                    <View style = {styles.titleText}>
                        <TextInput style = {{fontSize : 24}}
                        value = {this.state.Title}
                        placeholder = "Title" 
                        onChangeText = {(text) => this.setState({
                            Title : text
                        })}
                        />
                        <ScrollView>
                        <TextInput style = {{fontSize : 18}}
                        multiline
                        value = {this.state.Note}
                        numberOfLines = {3}
                        maxLength = {150}
                        placeholder = "Note"
                        onChangeText = {(text) => this.setState({
                            Note : text
                        })}/>
                        </ScrollView>
                    </View>

                    <View style = {styles.footerComponents}>
                    <View style ={this.state.menuListDisplay}>
                        <View style = {styles.delete}>
                        <TouchableOpacity style = {{width : "100%"}}> 
                            <Image style = {{width : 20, height : 20, left : 10, top : 10}}
                            source = {require('../Assets/DeleteIcon.png')}/>
                                <Text style = {{fontSize : 20, left : 80, bottom : 12}}> 
                                Delete 
                                </Text> 
                            </TouchableOpacity>
                        </View>

                        <View style = {styles.makeCopy}>
                            <TouchableOpacity style = {{width : "100%"}}>
                                <Image style = {{width : 20, height : 20, left : 10, top : 10}}
                                source = {require('../Assets/CopyIcon.png')}/>
                                <Text style = {{fontSize : 20, left : 80, bottom : 12}}> 
                                    Make a Copy 
                                </Text> 
                            </TouchableOpacity>
                        </View>

                        <View style = {styles.send}>
                        <TouchableOpacity style = {{width : "100%"}}>
                                <Image style = {{width : 20, height : 20, left : 10, top : 10}}
                                source = {require('../Assets/SendIcon.png')}/>
                                <Text style = {{fontSize : 20, left : 80, bottom : 12}}> 
                                Send                                
                                </Text> 
                            </TouchableOpacity>
                        </View>

                        <View style = {styles.collaborator}>
                        <TouchableOpacity style = {{width : "100%"}}>
                                <Image style = {{width : 30, height : 20, left : 6, top : 10}}
                                source = {require('../Assets/CollaboratorIcon.png')}/>
                                <Text style = {{fontSize : 20, left : 80, bottom : 12}}> 
                                Collaborator                                
                                </Text> 
                            </TouchableOpacity>
                        </View>

                        <View style = {styles.labels}>
                        <TouchableOpacity style = {{width : "100%"}}>
                                <Image style = {{width : 20, height : 20, left : 10, top : 10}}
                                source = {require('../Assets/LabelIcon.png')}/>
                                <Text style = {{fontSize : 20, left : 80, bottom : 12}}> 
                                Labels                                
                                </Text> 
                            </TouchableOpacity>
                        </View>

                        <ScrollView horizontal = {true}
                        showsHorizontalScrollIndicator={false}>
                        <View style = {styles.colorPaletteStyle}>
                            <TouchableOpacity style = {{width : "100%"}}>
                            
                                {/* <View> */}
                                <View style = {{top : -28, height : 40, bottom : 20}}>
                                <ColorPalette
                                    onChange={color => this.changeColor(color)}
                                    defaultColor={'#ffffff'}
                                    colors={['#ffffff', '#bfef45', '#fffac8', '#ffd8b1', '#fabebe','#aaffc3', '#42d4f4', '#9B59B6', '#e6194B', '#2980B9']}
                                    title={""}
                                    icon={
                                      <Image style = {{width : 15, height : 15}}
                                      source = {require('../Assets/CheckMark.png')}/>
                                    // Icon can just be text or ASCII
                                    }
                                />
                                
                                </View>
                            </TouchableOpacity>
                        </View>
                        </ScrollView>
                    </View>

                    {/* <View> */}
                    <View style = {styles.addItemIcon}>

                        <TouchableOpacity>
                            <Image style = {{width : 40, height : 40, left : 5}}
                            source = {require('../Assets/AddItems.png')}/>
                        </TouchableOpacity> 
                    </View>
                    {/* </View> */}
                    {/* 
                    <View style = {this.state.snackBarDisplay}>
                    <Snackbar message = {"Hello"} actionText = {"UNDO"}/>
                    </View> */}

                    <View style = {styles.menuIcon}>
                        <TouchableOpacity onPress = {this.menuIcon}>
                            <Image style = {{width : 20, height : 25, marginTop : 5, marginRight : 20}}
                            source = {require('../Assets/Menu.png')}/>
                        </TouchableOpacity>
                        </View> 
                    </View>
                </View>
            </View>
        // </ScrollView>
        )
    }
}

export default CreateNote