import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image, TextInput, ScrollView} from 'react-native'
import styles from './StyleSheets'
// import RestoreOptions from './RestoreOptions'
import RBSheet from "react-native-raw-bottom-sheet";
import Snackbar from 'react-native-snackbar';
import firebase from '../Firebase'

var dataToUpdate
var updatedDeleteValue

class RestoreTrash extends Component{

    constructor(props){
        super(props)
        // this.state = {
        //     Title : '',
        //     Note : '',
        //     KeyValue : '',

        // }
    }

    handleEdit = () => {
        console.log('Deleted value in snackbar ' + dataToUpdate.Deleted)
        Snackbar.show({
            title: 'Cannot Edit in Recycle Bin',
            duration: 1000,
            action: {
                title: 'RESTORE',
                color: '#ff9933',
                onPress: () => {
                    // this.setState({
                        updatedDeleteValue = !dataToUpdate.Deleted
                        firebase.database.database().ref('Notes').child(dataToUpdate.key).update({Deleted : updatedDeleteValue})
                        this.props.navigation.goBack()
                        // this.handleBackArrowToCreate()
                    // })
                    // alert(`State Changed ${updatedDeleteValue}`)
                }
            }
        });
    }

    handleBackDelete = () => {
        this.props.navigation.goBack()
    }

    handleRestore = () => {
        alert(`Restore Clicked`)
    }

    render(){
        const { navigation } = this.props
        dataToUpdate = navigation.getParam('clickedNote' , '')
        console.log('Deleted Value from Database ' + dataToUpdate.Deleted)
        return(
            <View style = {{width : '100%', height : '100%', justifyContent : 'space-between'}}>
                <View>
                <View>
                    <TouchableOpacity onPress = {this.handleBackDelete}>
                        <Image style = {{width : 30, height : 30, tintColor : 'black'}}
                        source = {require('../Assets/BackArrow.png')}/>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress = {this.handleEdit}>
                    <View style = {{height : 600}}>
                        <TextInput style={{ fontSize: 24 }}
                            value={dataToUpdate.Title}
                            placeholder="Title"
                            editable = {false}
                        />
                            <TextInput style={{ fontSize: 18 }}
                            multiline
                            value={dataToUpdate.Note}
                            placeholder="Note" 
                            editable = {false}
                            />
                    </View>
                </TouchableOpacity>
                </View>

                <View style = {{height : 30, flexDirection : 'row', justifyContent : 'space-between'}}>
                    <View>
                        <TouchableOpacity>
                            <Image style = {{width : 30, height : 25}}
                            source = {require('../Assets/AddItems.png')}/>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <View>
                            <TouchableOpacity onPress = {() => { this.RBSheet.open() }}>
                                <Image style = {{width : 20, height : 25}}
                                source = {require('../Assets/Menu.png')}/>
                            </TouchableOpacity>

                            <RBSheet
                            ref={ref => {
                                this.RBSheet = ref;
                            }}
                            height={100}
                            duration={250}
                            customStyles={{
                            container: {
                                justifyContent: "flex-start",
                                alignItems: "flex-start",
                                bottom: 40
                            }
                            }}>
                                <RestoreOptions handleRestore = {this.handleRestore}/>
                            </RBSheet>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default RestoreTrash

const RestoreOptions = (props) => {
    return(
        <View style = {{height : 100, width : '100%'}}>
            <View>
                <View style = {{height : 50}}>
                    <TouchableOpacity style = {{display : 'flex', flexDirection : 'row'}}
                    onPress = {props.handleRestore}>
                        <Image style = {{width : 30, height : 30, top : 10, left : 15}}
                        source = {require('../Assets/restore.png')}/>
                        <Text style = {{fontSize : 20, top : 10, left : 40}}> Restore </Text>
                    </TouchableOpacity>
                </View>

                <View style = {{height : 50}}>
                    <TouchableOpacity style = {{display : 'flex', flexDirection : 'row'}}>
                        <Image style = {{width : 30, height : 30, top : 10, left : 15}}
                        source = {require('../Assets/deleteForever.png')}/>
                        <Text style = {{fontSize : 20, top : 10, left : 40}}> Delete Forever </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}