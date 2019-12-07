import React, {Component} from 'react'
import {Text, View, Button, ScrollView, Image, TouchableOpacity, ActivityIndicator} from 'react-native'
import styles from './StyleSheets'
import { Input } from 'react-native-elements';
import firebase from '../Firebase';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import {StackNavigator} from 'react-navigation'
import Dashboard from './Dashboard'
import Register from './Register'
import {AsyncStorage} from 'react-native'
import UserServices from '../../UserServices'

class Login extends Component{

    constructor(props){
        super(props)
        this.state = {
            email : '',
            emailError : '',
            password : '',
            passwordError : '',
            isLoading : {
                display : 'none'
            },
            showLoading : false
        }
    }

    onPressForgotpassword = () => {
        this.props.navigation.navigate('ForgotPassword')
    }

    validateEmail = (text,type) => {
        var emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        let isError = false
        this.state.email = text
        if(type == 'email'){
            if(emailRegex.test(this.state.email)){
                this.state.emailError = ''
                this.setState({
                    ...this.state
                })
            }else{
                            this.state.emailError = "Invalid Text"
                            this.setState({
                                ...this.state
                            })
            }  
        }
    }

    validatePassword = (text, type) => {
        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        let isError = false
        this.state.password = text
        if(type == 'password'){
            if(passwordRegex.test(this.state.password)){
                this.state.passwordError = ''
                this.setState({
                    ...this.state
                })
                
            }else{
                        this.state.passwordError = "Invalid Input"
                    this.setState({
                        ...this.state
                    })
            }
        }
    }

    handleSignIn = () => {
        var isError = false
        if(this.state.email == ''){
            this.state.emailError = "Field Required"
            this.setState({
                ...this.state
            })
            isError = true
        }
        if(this.state.password == ''){
            this.state.passwordError = "Field Required"
            this.setState({
                ...this.state
            })
            isError = true
        }
        if(!this.state.showLoading){
            this.setState({
                showLoading : true,
                isLoading : 'size = "large"'
            })
        }else{
            this.setState({
                isLoading : {
                    display : 'none'
                },
                showLoading : false
            })
        }

        if(!isError){
            firebase.firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((success) => {
                this.setState({
                    email : '',
                    password : '',
                    isLoading : {
                        display : 'none'
                    }
                })
                this.props.navigation.navigate('DrawerRouter')
                var userData = firebase.firebase.auth().currentUser
                var userId = userData.uid

                // var userInfo = new UserServices
                // userInfo.userDetails()
                // console.log("User Details from Login : " + JSON.stringify(userInfo.userDetails()));
                //var userData = UserServices.userDetails()
                // var user = firebase.firebase.auth().currentUser
                
                // console.log('User data' + JSON.stringify(user))
                // console.warn('User data' + JSON.stringify(user))
                AsyncStorage.setItem('UserId', userId)
                AsyncStorage.getItem('UserId') .then((success) => {
                    console.log("UserId " +success);     
                })
                .catch ((error) => {
                    console.log("Error from login " + error);
                    
                })
            })
            .catch((error) => {
                this.state.passwordError = 'Password is Invalid or User does not exist'
                this.setState({
                    ...this.state
                })
            })
        }
    }

    handleSignUp = () => {
        this.props.navigation.navigate('Register')
    }

    render(){
        //const {navigate} = this.props.navigation;
        // console.warn("props in render" + JSON.stringify(this.props))
        return(
            <ScrollView>   
             {/* <KeyboardAwareScrollView> */}
                <View style = {styles.loginContainer}>  
                
                    <View style = {styles.loginSubcontainer}> 

                    {/* <View style = {styles.demo}>
                            <Input style = {styles.demo1}
                            placeholder = 'Demo 1' />
                            <Input style = {styles.demo2}
                            placeholder = 'Demo 2' />
                        </View> */}

                        <View>
                            <Image style = {styles.image}
                                source = {require('../Assets/fundoo2.jpeg')}
                            />
                            <Text style = {styles.fundooapp}> FundooApp </Text>
                            <Text style = {styles.signInText}> Sign In </Text>  
                            <Text style = {styles.label}> Use Your Google Account </Text>
                        </View>

                        <View style = {styles.emailInput}>
                            <Input
                            value={this.state.email}
                                placeholder='Email ID'
                                onChangeText = {(text) => this.validateEmail(text, 'email')}
                                errorMessage = {this.state.emailError}
                                // leftIcon = {{ type: 'font-awesome', name: 'chevron-left' }}
                            />
                        </View>

                        <View style = {styles.passwordInput}>
                            <Input
                            value = {this.state.password}
                                placeholder='Password'
                                secureTextEntry = {true}
                                onChangeText = {(text) => this.validatePassword(text, 'password')}
                                errorMessage = {this.state.passwordError}
                            />
                        </View>

                        <View>
                            <TouchableOpacity onPress = {this.onPressForgotpassword}>
                                <Text style = {styles.forgotPassword}> Forgot Password? </Text>
                            </TouchableOpacity>
                        </View>

                        <View style = {styles.signInButton}>
                            <Button title = "Sign In"
                             onPress = {this.handleSignIn}/>
                        </View>
                        
                        <View >
                            <Text style = {styles.createAccountText}> Not A User? Sign Up. </Text>
                        </View>
                        <View style = {styles.signUpButton}>
                            <Button title = "Sign Up"
                            onPress = {this.handleSignUp}/>
                        </View>
                        <View>
                            <ActivityIndicator style = {this.state.isLoading}/>
                        </View>
                    </View>     
                </View>
                 {/* </KeyboardAwareScrollView> */}
                  </ScrollView>
        )
    }
}

export default Login