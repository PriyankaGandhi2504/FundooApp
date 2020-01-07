import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Button, AsyncStorage } from 'react-native'
import styles from './StyleSheets'
import firebase from '../Firebase'
import { Divider } from 'react-native-elements'
import ImagePicker from 'react-native-image-picker'
import { Avatar } from 'react-native-paper'
import userData from '../../UserServices'
const UserData = new userData
// import signOutAction from './SignOutAction'
// import {connect} from 'react-redux'

var profileIcon, profile
const options = {
    title: 'Select Image',
    takePhotoButtonTitle: 'Take Photo',
    chooseFromLibraryButtonTitle: 'Choose Image',
}

class SignOutMenu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userEmailId: '',
            avatarSource: ''
        }
    }

    signOut = () => {
        firebase.firebase.auth().signOut().then(() => {
            AsyncStorage.setItem('isAuthenticatedUser', 'false')
        })
        this.props.navigation.navigate('Login')
    }

    uploadProfile = () => {
        var userKey; var userValue; var userObjectArray = []
        ImagePicker.showImagePicker(options, (response) => {
            console.log("Response : " + response);
            if (response.didCancel) {
                console.log('User cancelled Image Picker');
            } else if (response.error) {
                console.log("Image Picker Error : " + response.error);
            } else {
                let source = { uri: response.uri }
                this.setState({
                    avatarSource: source
                })
                profile = this.state.avatarSource
                firebase.database.database().ref('User').on('child_added', function (snapshot) {
                    firebase.database.database().ref('User').on('value', function (snapshot) {
                        userValue = snapshot.val()
                        userKey = Object.keys(userValue)
                    })
                    var currentUserEmailId = firebase.firebase.auth().currentUser.email
                    for (var j = 0; j < userKey.length; j++) {
                        var keyIndex = userKey[j]
                        var userDataKey = userValue[keyIndex]
                        userDataKey['key'] = keyIndex
                        userObjectArray.push(userDataKey)
                        if (userObjectArray[j].email === currentUserEmailId) {
                            firebase.database.database().ref('User').child(userObjectArray[j].key).update({ userProfile: profile })
                        }
                    }
                })
            }
        })
    }

    handleCrossIcon = () => {
        this.props.navigation.navigate('Dashboard', { updatedProfile: profile })
    }

    componentDidMount = () => {
        UserData.userData(response => {
            this.setState({
                usersNote: response
            })
        })
        var userValue, currentUser
        firebase.database.database().ref('User').on('child_added', function (snapshot) {
            userValue = snapshot.val()
            currentUser = firebase.firebase.auth().currentUser.email
            if (currentUser === userValue.email) {
                profileIcon = userValue.userProfile
            }
        })
    }

    render() {
        const { navigation } = this.props
        var userEmailId = navigation.getParam('userEmailId')

        return (
            <View style={styles.signOutContainer}>
                <View style={styles.signOutHeader}>
                    <View>
                        <TouchableOpacity onPress={this.handleCrossIcon}>
                            <Image style={{ width: 25, height: 25, borderRadius: 50 }}
                                source={require('../Assets/CrossIcon.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.userDetails}>
                        <View>
                            <TouchableOpacity onPress={this.uploadProfile}>
                                <Avatar.Image size={50}
                                    source={this.state.avatarSource === '' ? profileIcon : this.state.avatarSource}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: "auto", color: 'black', display: "flex", justifyContent: "center" }}>
                            <Text> {userEmailId} </Text>
                        </View>

                        <View>
                            <Image style={{ width: 35, height: 35, borderRadius: 50 }}
                                source={require('../Assets/F_Symbol.png')} />
                        </View>
                    </View>
                </View>

                <Divider style={{ backgroundColor: 'black', marginBottom: 10 }} />

                <View style={styles.signOut}>
                    <Button title="Sign Out"
                        onPress={this.signOut} />
                </View>
            </View>
        )
    }
}

export default SignOutMenu

// const mapStateToProps = state => {
//     return {
//         signIn : state.signIn
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         signOut : () => dispatch({type : 'SIGN_OUT'})
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SignOutMenu)