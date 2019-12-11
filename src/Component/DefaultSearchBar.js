import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, Button, FlatList, TouchableHighlight } from 'react-native'
import styles from './StyleSheets'
import firebase from '../Firebase'

var list = require('../Assets/List.png')
var grid = require('../Assets/Grid.png')

class DefaultSearchBar extends Component{

    constructor(props){
        super(props)
        this.state={
            gridDisplay: false,
            // gridView: {
            //     display: 'none'
            // },
            icon: grid,
            searchBar: {
                display: styles.searchBar
            },
        }
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

    render(){
       const {textdisplay} = this.props
        // console.log('Text Display ' +this.props.searchText);
        // console.log('userNoteProp in Default searchbar',this.props.userNotesProp)
        
        return(
            <View>
                        <View style={styles.searchBar}>
                            <View>
                                <TouchableOpacity style={{ width: 50 }}
                                    onPress={this.props.navigation.openDrawer}
                                    >
                                    <Image style={{ width: 30, height: 30, left: 10, top: 3 }}
                                        source={require('../Assets/DrawerIcon.png')} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ left: 70, top: -23 }}>
                                <TouchableOpacity style={{ width: 120 }}
                                    onPress={this.updateSearch}
                                    >
                                    <Text>
                                     {textdisplay}
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
                                    <TouchableOpacity 
                                    onPress={this.gridDisplay}
                                    >
                                        <Image style={{ width: 30, height: 30 }}
                                            source={this.state.icon} />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ right: 10, top: -26 }}>
                                    <TouchableOpacity 
                                    onPress={this.profileDisplay}
                                    >
                                        <Image style={{ width: 30, height: 30 }}
                                            source={require('../Assets/ProfileIcon.jpg')} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
        )
    }
}

export default DefaultSearchBar