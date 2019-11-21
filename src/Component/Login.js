import React, {Component} from 'react'
import {Text, View, Button, ScrollView, Image, TouchableOpacity} from 'react-native'
import styles from './StyleSheets'
import { Input } from 'react-native-elements';
import firebase from '../Firebase';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import {StackNavigator} from 'react-navigation'
import Dashboard from './Dashboard'
import Register from './Register'
import Firebase from '../Firebase';
import {AsyncStorage} from 'react-native'

class Login extends Component{

    constructor(props){
        super(props)
        this.state = {
            email : '',
            emailError : '',
            password : '',
            passwordError : ''
        }
    }

    onPressForgotpassword = () => {
        // alert(`Forget Password Clicked`)
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
                console.warn('Text is correct');  
            }else{
                            this.state.emailError = "Invalid Text"
                            this.setState({
                                ...this.state
                            })
                console.warn('Invalid Text');   
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
                console.warn('Password is correct');
                this.setState({
                    ...this.state
                })
                
            }else{
                        this.state.passwordError = "Invalid Input"
                    this.setState({
                        ...this.state
                    })
                console.warn('Password Invalid');
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

        if(!isError){
            firebase.firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((success) => {
                // console.warn("Success" + success);
                this.setState({
                    email : '',
                    password : '',
                })
                // console.log('Email value ' + this.state.email);
                
                // console.warn("Props "+ JSON.stringify(this.props))
                this.props.navigation.navigate('DrawerRouter')
                var user = firebase.firebase.auth().currentUser
                console.log('User data' + JSON.stringify(user))
                // console.warn('User data' + JSON.stringify(user))
                AsyncStorage.setItem('UserData', JSON.stringify(user))
                // console.warn("User Id " + user.uid)
                // console.warn('Entered Dashboard Screen')
                // console.log("User Email " + user.email)
                // var path = '/Dashboard'
                // this.props.history.push(path)
            })
            .catch((error) => {
                // console.warn("Email in auth method " + emailId);
                // console.warn("Password in auth method : " + passwordData);
                console.warn("Error of Auth " + error);

                isError = true
                errorCode = error.code;
                errorMessage = error.message;
                console.warn("Error Code : " + errorCode);
                console.warn("Error Message : " + errorMessage);

                if (errorCode === 'auth/user-not-found') {
                    // dummy = true
                    // console.log("Dummy inside Catch");

                    // isError = true
                    console.warn(`No Such User Found \n Please Click On Sign Up`)
                } else {
                    // isError = true
                    console.warn(errorMessage);
                }
            })

        }
        console.warn(`Sign In Clicked`)

    }

    handleSignUp = () => {
        // console.warn(`Sign Up Clicked`)
        this.props.navigation.navigate('Register')
    }

    // static navigationOptions = {
    //     title : 'MainNavigator'
    // }

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

                        {/* <View>
                            <TouchableOpacity onPress = {this.props.navigation.openDrawer}>
                            <Text>
                                Hello
                            </Text>
                            </TouchableOpacity>
                            
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
                                // leftIcon = {{ type: 'font-awesome', name: 'chevron-left' }}
                            />
                        </View>

                        <View>
                            <TouchableOpacity onPress = {this.onPressForgotpassword}>
                                <Text style = {styles.forgotPassword}> Forgot Password? </Text>
                            </TouchableOpacity>
                        </View>

                        {/* <View style = {styles.forgotPassword}>
                            <label>
                            Forgot Password
                            </label>
                        
                        </View> */}

                        <View style = {styles.signInButton}>
                            <Button title = "Sign In"
                            // onPress = {() => navigate('Dashboard')}/>
                             onPress = {this.handleSignIn}/>
                        </View>
                        
                        <View >
                            <Text style = {styles.createAccountText}> Not A User? Sign Up. </Text>
                        </View>
                        <View style = {styles.signUpButton}>
                            <Button title = "Sign Up"
                            onPress = {this.handleSignUp}/>
                        </View>
                    </View>     
                </View>
                 {/* </KeyboardAwareScrollView> */}
                  </ScrollView>
        )
    }
}

export default Login