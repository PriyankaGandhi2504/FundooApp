import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import styles from './StyleSheets'

class ToggleSearchBar extends Component{

    constructor(){
        super()
        this.state = {
            counter : 1
        }
    }

    render(){
        
        return(
            <View style = {{height : "100%", width : "100%"}}>
                <View style = {styles.toggleSearchBar}>
                    <View style = {{display : "flex", flexDirection : "row", width : 100, justifyContent : 'space-around'}}>
                        <TouchableOpacity>
                            <View>
                                <Image style = {{width : 30, height : 30, top : 10, tintColor : '#0066cc'}}
                                source = {require('../Assets/Cross.png')}/>
                            </View>
                        </TouchableOpacity>

                        <View>
                            <Text style = {{color : '#0066cc', fontSize : 25, top : 8}}> {this.state.counter} </Text>
                        </View>
                    </View>
                    
                    <View style = {{display : "flex", flexDirection : "row", width : 210, justifyContent : 'space-around'}}>
                        <TouchableOpacity>
                            <View>
                                <Image style = {{width : 25, height : 25, top : 15, tintColor : '#0066cc'}}
                                source = {require('../Assets/Pinned.png')}/>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View>
                                <Image style = {{width : 25, height : 25, top : 13, tintColor : '#0066cc'}}
                                source = {require('../Assets/Reminder.png')}/>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View>
                                <Image style = {{width : 25, height : 25, top : 13, tintColor : '#0066cc'}}
                                source = {require('../Assets/ColorPalette.png')}/>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View>
                                <Image style = {{width : 25, height : 25, top : 13, tintColor : '#0066cc'}}
                                source = {require('../Assets/Label.png')}/>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View>
                                <Image style = {{width : 20, height : 25, top : 13, tintColor : '#0066cc'}}
                                source = {require('../Assets/Menu.png')}/>
                            </View>
                        </TouchableOpacity>

                    </View>

                </View>
                
            </View>
        )
    }
}

export default ToggleSearchBar