import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, Button, ScrollView, ActivityIndicator } from 'react-native'
import styles from './StyleSheets'
import { Input } from 'react-native-elements'
import firebase from '../Firebase'
import Login from './Login'
import axios from 'axios'
import axiosDemo from './AxiosDemo'
const axiosObj = new axiosDemo

class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            emailErr: '',
            password: '',
            passwordErr: '',
            firstName: '',
            firstNameErr: '',
            lastName: '',
            lastNameErr: '',
            confirmPassword: '',
            confirmPasswordErr: '',
            passwordShow: true,
            showLoading: false,
            isLoading: {
                display: 'none'
            },
            userProfile: ''
        }
    }

    validateFirstName = (text) => {
        var firstNameReg = /[a-zA-Z]$/
        this.state.firstName = text
        if (firstNameReg.test(this.state.firstName)) {
            this.state.firstNameErr = ''
            this.setState({
                ...this.state
            })
        } else {
            this.state.firstNameErr = "Invalid Input"
            this.setState({
                ...this.state
            })
        }
    }

    validateLastName = (text) => {
        var lastNameReg = /[a-zA-Z]$/
        this.state.lastName = text

        if (lastNameReg.test(this.state.lastName)) {
            this.state.lastNameErr = ''
            this.setState({
                ...this.state
            })
        } else {
            this.state.lastNameErr = "Invalid Input"
            this.setState({
                ...this.state
            })
        }
    }

    validateEmail = (text, type) => {
        var emailReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        this.state.email = text
        if (type == 'email') {
            if (emailReg.test(this.state.email)) {
                this.state.emailErr = ''
                this.setState({
                    ...this.state
                })
            } else {
                this.state.emailErr = "Invalid Email ID"
                this.setState({
                    ...this.state
                })
            }
        }
    }

    validatePassword = (text, type) => {
        var passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        this.state.password = text

        if (type == 'password') {
            if (passwordReg.test(this.state.password)) {
                this.state.passwordErr = ''

                this.setState({
                    ...this.state
                })
            } else {
                this.state.passwordErr = "Invalid Input"
                this.setState({
                    ...this.state
                })
            }
        }
    }

    validateConfirmPassword = () => {
        if (this.state.password == this.state.confirmPassword) {
            this.state.confirmPasswordErr = ''
            this.setState({
                ...this.state
            })
        } else {
            this.state.confirmPasswordErr = "Password Does Not Match"
            this.setState({
                ...this.state
            })
        }
    }

    eyeClick = () => {
        if (this.state.passwordShow) {
            this.setState({
                passwordShow: false
            })
        } else {
            this.setState({
                passwordShow: true
            })
        }
    }

    signInClick = () => {
        this.props.navigation.navigate('Login')
    }

    registerButton = () => {
        var isError = false
        if (this.state.firstName == '') {
            this.state.firstNameErr = "Field Required"
            this.setState({
                ...this.state
            })
            isError = true
        }
        if (this.state.lastName == '') {
            this.state.lastNameErr = "Field Required"
            this.setState({
                ...this.state
            })
            isError = true
        }
        if (this.state.email == '') {
            this.state.emailErr = "Field Required"
            this.setState({
                ...this.state
            })
            isError = true
        }
        if (this.state.password == '') {
            this.state.passwordErr = "Field Required"
            this.setState({
                ...this.state
            })
            isError = true
        }
        if (this.state.confirmPassword == '') {
            this.state.confirmPasswordErr = "Field Required"
            this.setState({
                ...this.state
            })
            isError = true
        }
        if (!this.state.isLoading) {
            this.setState({
                showLoading: true,
                isLoading: 'size = "large"'
            })
        } else {
            this.setState({
                showLoading: false,
                isLoading: {
                    display: 'none'
                }
            })
        }

        if (!isError) {
            if (this.state.password === this.state.confirmPassword) {
                var obj = {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    password: this.state.password,
                    userProfile: this.state.userProfile,
                }
                firebase.database.database().ref("/User").push(obj)
                firebase.firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                    .then((success) => {
                        // axiosObj.handleUserPost(obj)
                        // axiosObj.handleUserPost(this.state.firstName, this.state.lastName, 
                        //     this.state.email, this.state.password, this.state.userProfile)
                        this.setState({
                            firstName: '',
                            email: '',
                            password: '',
                            isLoading: {
                                display: "none"
                            }
                        })
                        this.props.navigation.navigate('Login')
                    })
                    .catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        if (errorCode == 'auth/weak-password') {
                            console.warn('The password is too weak.');
                        } else {
                            alert(errorMessage);
                        }
                        console.warn(error);
                    });
            } else {
                this.state.confirmPasswordErr = 'Password Did Not Match'
                this.setState({
                    ...this.state
                })
            }
        } else {
            alert(`Details not valid \n Please check if you have entered correct details`)
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.registerContainer}>
                    <View style={styles.registerSubContainer}>
                        <View style={styles.combinedDiv}>
                            <View>
                                <Image style={styles.registerImage}
                                    source={require('../Assets/fundoo2.jpeg')}
                                />
                                <Text style={styles.registerFundooapp}> FundooApp </Text>
                                <Text style={styles.label}> Create Your Google Account </Text>
                            </View>

                            <View style={styles.componentDiv}>
                                <View style={styles.firstName}>
                                    <Input
                                        value={this.state.firstName}
                                        placeholder='Enter First Name *'
                                        onChangeText={(text) => this.validateFirstName(text)}
                                        errorMessage={this.state.firstNameErr} />
                                </View>

                                <View style={styles.lastName}>
                                    <Input
                                        value={this.state.lastName}
                                        placeholder='Enter Last Name *'
                                        onChangeText={(text) => this.validateLastName(text)}
                                        errorMessage={this.state.lastNameErr} />
                                </View>

                                <View style={styles.registerEmail}>
                                    <Input
                                        value={this.state.email}
                                        placeholder='Email ID *'
                                        onChangeText={(text) => this.validateEmail(text, 'email')}
                                        errorMessage={this.state.emailErr} />
                                </View>

                                <View style={styles.registerPassword}>
                                    <Input
                                        value={this.state.password}
                                        placeholder='Password *'
                                        textContentType="password"
                                        secureTextEntry={true}
                                        onChangeText={(text) => this.validatePassword(text, 'password')}
                                        errorMessage={this.state.passwordErr} />
                                    <Text style={{ color: '#0000ff' }}> * Use 8 or more characters with a mix of letters, numbers & symbols * </Text>
                                </View>

                                <View style={styles.confirmPassword}>
                                    <Input
                                        value={this.state.confirmPassword}
                                        placeholder='Confirm Password *'
                                        textContentType="password"
                                        secureTextEntry={this.state.passwordShow}
                                        onChangeText={(text) => this.setState({
                                            confirmPassword: text
                                        })}
                                        onEndEditing={this.validateConfirmPassword}
                                        errorMessage={this.state.confirmPasswordErr} />


                                    <TouchableOpacity onPress={this.eyeClick}>
                                        <Image style={{ width: 40, height: 30 }}
                                            source={require('../Assets/Password.png')} />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.signInRegister}>
                                    <TouchableOpacity onPress={() => this.signInClick()}>
                                        <Text style={styles.signInLabel}> Sign In Instead </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={this.nextButton}>
                                        <Button title="Register"
                                            style={styles.registerButton}
                                            onPress={this.registerButton} />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <ActivityIndicator style={this.state.isLoading} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default Register