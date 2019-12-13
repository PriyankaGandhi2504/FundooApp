import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import Dashboard from './Dashboard'
import { Input } from 'react-native-elements'
import { TextInput } from 'react-native-paper'
import Note from './Note'
import userData from '../../UserServices'
const UserData = new userData

class SearchNote extends Component{

    constructor(props){
        super(props)
        this.state = {
            searchedText : '',
            notesArray : [],
            noteDisplay : {
                display : 'none'
            }
        }
    }

    componentDidMount = () => {
        UserData.userData( (response) => {
            // console.log('Aerchived notes in  Archive page',response)
            this.setState({
                notesArray : response
            })
        })
    }

    handleBackArrow = () => {
        this.props.navigation.navigate('Dashboard')
    }

    handleSearchNote = (value) => {
        this.setState({
            searchedText : value
        })
        return(
            this.state.notesArray.map((notesArray, indexes) => {
                if (notesArray.Note === value || notesArray.Title === value) {
                    // this.setState({
                    //     noteDisplay : {
                    //         width : '100%'
                    //     }
                    // })
                    
                    return (                    
                        alert('found')
                        // <Text>hola</Text>
                    );
                    // <View style = {{height : '100%' , backgroundColor : 'pink'}}>
                    //             <Text> hello</Text>
                    //     </View>);
                        // <View style = {{height : 900}}>
                    //    ? <Note index={indexes} Title={notesArray.Title} Note={notesArray.Note} 
                    //     navigation={this.props.navigation} gridDisplayValue={this.state.gridDisplay} 
                    //     Color={notesArray.Color} Reminder={notesArray.Reminder}/>
                        // </View>
                    
                }
            })
        )
    }

    handleCrossIcon = () => {
       this.state.searchedText = ''
    }

    render(){
        return(
            <View style = {{height : 50, borderBottomWidth : 0.5, elevation : 2, display : 'flex', flexDirection : 'row', justifyContent : 'space-between'}}>
                <TouchableOpacity onPress = {this.handleBackArrow}>
                    <View>
                        <Image style = {{width : 30, height : 30, top : 10}}
                        source = {require('../Assets/BackArrow.png')}/>
                    </View>
                </TouchableOpacity>

                <View style = {{width : 300, height : 60}}>
                    <TextInput style = {{height : 50, width : '100%'}}
                    value = {this.state.searchedText}
                    placeholder = 'Search your notes'
                    onChangeText = {(value) => this.handleSearchNote(value)}/>
                    {/* <View style = {this.state.noteDisplay}>
                    <Note index={indexes} Title={notesArray.Title} Note={notesArray.Note} navigation={this.props.navigation} gridDisplayValue={this.state.gridDisplay} Color={notesArray.Color} Reminder={notesArray.Reminder}/>
                    </View> */}
                </View>
 
                <TouchableOpacity onPress = {this.handleCrossIcon}>
                    <View style = {{width : '90%', display : 'flex', alignItems : 'flex-end'}}>
                        <Image style = {{width : 30, height : 30, top : 10, tintColor : 'grey'}}
                        source = {require('../Assets/Cross.png')}/>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}

export default SearchNote