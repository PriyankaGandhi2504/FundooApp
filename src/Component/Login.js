import React, { Component } from 'react'
import { Text, View, Button, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from './StyleSheets'
import { Input } from 'react-native-elements';
import firebase from '../Firebase';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { StackNavigator } from 'react-navigation'
import Dashboard from './Dashboard'
import Register from './Register'
import { AsyncStorage } from 'react-native'
import UserServices from '../../UserServices'
import { LoginManager } from 'react-native-fbsdk'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            emailError: '',
            password: '',
            passwordError: '',
            isLoading: {
                display: 'none'
            },
            showLoading: false
        }
    }

    onPressForgotpassword = () => {
        this.props.navigation.navigate('ForgotPassword')
    }

    validateEmail = (text, type) => {
        var emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        this.state.email = text
        if (type == 'email') {
            if (emailRegex.test(this.state.email)) {
                this.state.emailError = ''
                this.setState({
                    ...this.state
                })
            } else {
                this.state.emailError = "Invalid Text"
                this.setState({
                    ...this.state
                })
            }
        }
    }

    validatePassword = (text, type) => {
        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        this.state.password = text
        if (type == 'password') {
            if (passwordRegex.test(this.state.password)) {
                this.state.passwordError = ''
                this.setState({
                    ...this.state
                })
            } else {
                this.state.passwordError = "Invalid Input"
                this.setState({
                    ...this.state
                })
            }
        }
    }

    handleSignIn = () => {
        var isError = false
        if (this.state.email == '') {
            this.state.emailError = "Field Required"
            this.setState({
                ...this.state
            })
            isError = true
        }
        if (this.state.password == '') {
            this.state.passwordError = "Field Required"
            this.setState({
                ...this.state
            })
            isError = true
        }
        if (!this.state.showLoading) {
            this.setState({
                showLoading: true,
                isLoading: 'size = "large"'
            })
        } else {
            this.setState({
                isLoading: {
                    display: 'none'
                },
                showLoading: false
            })
        }

        if (!isError) {
            firebase.firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                .then((success) => {
                    this.setState({
                        email: '',
                        password: '',
                        isLoading: {
                            display: 'none'
                        }
                    })

                    AsyncStorage.setItem('UserId', String(success.user.uid))
                    AsyncStorage.setItem('isAuthenticatedUser', 'true')
                    AsyncStorage.getItem('isAuthenticatedUser').then((success) => {
                        console.log("Is Authenticated User " + success);
                    }).catch((error) => {
                        console.log('Error from get item ' + error);
                    })
                    this.props.navigation.navigate('DrawerRouter')
                })
                .catch((error) => {
                    this.state.passwordError = 'Password is Invalid or User does not exist'
                    this.setState({
                        ...this.state
                    })
                })
        }
    }

    loginFacebook = () => {
        try {
            let result = LoginManager.logInWithPermissions(['public_profile'])
            if (result.isCancelled) {
                alert(`Login Cancelled`)
            } else {
                this.props.navigation.navigate('DrawerRouter')
                console.log('Login was successful with Permissions' + result.grantedPermissions.toString())
            }
        } catch (error) {
            console.log('Facebook Login Failed with Error ' + error);
        }
    }

    handleSignUp = () => {
        this.props.navigation.navigate('Register')
    }

    render() {
        return (
            <ScrollView>
                {/* <KeyboardAwareScrollView> */}
                <View style={styles.loginContainer}>
                    <View style={styles.loginSubcontainer}>
                        <View>
                            <Image style={styles.image}
                                source={require('../Assets/fundoo2.jpeg')}
                            />
                            <Text style={styles.fundooapp}> FundooApp </Text>
                            <Text style={styles.signInText}> Sign In </Text>
                            <Text style={styles.label}> Use Your Google Account </Text>
                        </View>

                        <View style={styles.emailInput}>
                            <Input
                                value={this.state.email}
                                placeholder='Email ID'
                                onChangeText={(text) => this.validateEmail(text, 'email')}
                                errorMessage={this.state.emailError}
                            // leftIcon = {{ type: 'font-awesome', name: 'chevron-left' }}
                            />
                        </View>

                        <View style={styles.passwordInput}>
                            <Input
                                value={this.state.password}
                                placeholder='Password'
                                secureTextEntry={true}
                                onChangeText={(text) => this.validatePassword(text, 'password')}
                                errorMessage={this.state.passwordError}
                            />
                        </View>

                        <View>
                            <TouchableOpacity onPress={this.onPressForgotpassword}>
                                <Text style={styles.forgotPassword}> Forgot Password? </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.signInButton}>
                            <Button title="Sign In"
                                onPress={this.handleSignIn} />
                        </View>

                        <View>
                            <Button title='Login with Facebook'
                                style={{ bottom: 10 }}
                                onPress={this.loginFacebook}
                            />
                        </View>

                        <View >
                            <Text style={styles.createAccountText}> Not A User? Sign Up. </Text>
                        </View>
                        <View style={styles.signUpButton}>
                            <Button title="Sign Up"
                                onPress={this.handleSignUp} />
                        </View>
                        <View>
                            <ActivityIndicator style={this.state.isLoading} />
                        </View>
                    </View>
                </View>
                {/* </KeyboardAwareScrollView> */}
            </ScrollView>
        )
    }
}

export default Login