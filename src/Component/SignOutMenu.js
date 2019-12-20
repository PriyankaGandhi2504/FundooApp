import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity, Button} from 'react-native'
import styles from './StyleSheets'
import firebase from '../Firebase'
import {Divider} from 'react-native-elements'
import ImagePicker from 'react-native-image-picker'
import FastImage from 'react-native-fast-image'
// import signOutAction from './SignOutAction'
// import {connect} from 'react-redux'

const options = {
    title : 'Select Image',
    takePhotoButtonTitle : 'Take Photo',
    chooseFromLibraryButtonTitle : 'Choose Image',
}
class SignOutMenu extends Component {

    constructor(props){
        super(props)
        this.state = {
            userEmailId : '',
            avtarSource : null
        }
    }

    signOut = () => {
        this.props.navigation.navigate('Login')
        firebase.firebase.auth().signOut()
        // this.props.signOut()        
    }

    uploadProfile = () => {
        ImagePicker.showImagePicker(options, (response) => {
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

    render(){
        const {navigation} = this.props
        var userEmailId = navigation.getParam('userEmailId')
        // console.log("User email id " + userEmailId);

        // var userData = firebase.firebase.auth().currentUser
        // var userEmail = userData.email

        return(
            <View style = {styles.signOutContainer}>
                <View style = {styles.signOutHeader}>
                    <View>
                        <TouchableOpacity onPress = {() => this.props.navigation.goBack()}>
                            <Image style = {{width : 25, height : 25, borderRadius : 50}}
                            source = {require('../Assets/CrossIcon.png')}/>
                        </TouchableOpacity>
                    </View>

                    <View style = {styles.userDetails}>
                        <View>
                            <TouchableOpacity onPress = {this.uploadProfile}>
                                <Image style = {{width : 35, height : 35}}
                                source = {require('../Assets/ProfileIcon.jpg')}/>
                            </TouchableOpacity>
                        </View>

                        <View style = {{width : "auto", color : 'black', display : "flex", justifyContent : "center"}}>
                            <Text> {userEmailId} </Text>
                        </View>

                        <View>
                            <Image style = {{width : 35, height : 35, borderRadius : 50}}
                            source = {require('../Assets/F_Symbol.png')}/>
                        </View>
                    </View>
                </View>
                
                <Divider style = {{backgroundColor : 'black', marginBottom : 10}}/>

                <View style = {styles.signOut}>
                    <Button title = "Sign Out"
                    onPress = {this.signOut}/>
                </View>

                <View style = {{width : '100%', height : '70%', backgroundColor : 'lightblue', display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
                        <FastImage style = {{width : 400, height : 400}}
                        source = {this.state.avtarSource}/>
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