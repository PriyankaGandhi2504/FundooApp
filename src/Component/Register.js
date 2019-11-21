import React, {Component} from 'react'
import {Text, View, Image, TouchableOpacity, Button, ScrollView} from 'react-native'
import styles from './StyleSheets'
import {Input} from 'react-native-elements'
import firebase from '../Firebase'
import Login from './Login'

class Register extends Component{

    constructor(props){
        super(props)
        this.state = {
            email : '',
            emailErr : '',
            password : '',
            passwordErr : '',
            firstName : '',
            firstNameErr : '',
            lastName : '',
            lastNameErr : '',
            confirmPassword : '',
            confirmPasswordErr : '',
            passwordShow : false
        }
    }

    // validateFirst = () => {
        
    //     var demo = /^[a-zA-Z]{2,}/.test(this.state.firstName)
    //     console.warn(demo);
        
    // }
    validateFirstName = (text) => {
        var firstNameReg = /[a-zA-Z]$/
        this.state.firstName = text
        isErr = false
        if(firstNameReg.test(this.state.firstName)){
            this.state.firstNameErr = ''
            this.setState({
                ...this.state
            })
            console.warn('First Name Correct');
            
        }else{
            // isErr = true
            // if(isErr){
            //     if(this.state.firstName == ''){
            //         this.state.firstNameErr = "Field Required"
            //         this.setState({
            //             ...this.state
            //         })
            //         console.warn('Field required');
                    
            //     }else{
                this.state.firstNameErr = "Invalid Input"
                this.setState({
                    ...this.state
                })
                console.warn('Invalid Input');
                    
            //     }
            // }
        }
    }

    validateLastName = (text) => {
        var lastNameReg = /[a-zA-Z]$/
        this.state.lastName = text
        
        if(lastNameReg.test(this.state.lastName)){
            this.state.lastNameErr = ''
            this.setState({
                ...this.state
            })
            console.warn('Last Name Correct');
            
        }else{
            this.state.lastNameErr = "Invalid Input"
            this.setState({
                ...this.state
            })
            console.warn('Invalid last name');
            
        }
    }

    validateEmail = (text, type) => {
        var emailReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        let isErr = false
        this.state.email = text
        if(type == 'email'){
            if(emailReg.test(this.state.email)){
                this.state.emailErr = ''
                this.setState({
                    ...this.state
                })
                console.warn('Text is correct');  
            }else{
                            this.state.emailErr = "Invalid Email ID"
                            this.setState({
                                ...this.state
                            })
                console.warn('Invalid Text');   
            }  
        }
    }

    validatePassword = (text, type) => {
        var passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        let isErr = false
        this.state.password = text
        // console.warn(this.state.password);
        
        if(type == 'password'){
            if(passwordReg.test(this.state.password)){
                this.state.passwordErr = ''
                
                this.setState({
                    ...this.state
                })
                console.warn('Password is correct');
            }else{
                        this.state.passwordErr = "Invalid Input"
                    this.setState({
                        ...this.state
                    })
                console.warn('Password Invalid');
            }
        }
    }

    validateConfirmPassword = () => {
        // console.warn("Password" + this.state.password);
        // console.warn("Confirm Password "+this.state.confirmPassword);
        if(this.state.password == this.state.confirmPassword){
            this.state.confirmPasswordErr = ''
            this.setState({
                ...this.state
            })
            console.warn('Password Matched'); 
        }else{
            this.state.confirmPasswordErr = "Password Does Not Match"
            this.setState({
                ...this.state
            })
        }
    }

    eyeClick = () => {
        console.warn('Eye Clicked');
        // if(!this.state.passwordShow){

        //     this.setState({
        //         passwordShow : true
        //     })
        // }else{
        //     this.setState({
        //         passwordShow : false
        //     })
        // }
    }

    signInClick = () => {
        // alert(`Sign In Instead Clicked`)
        this.props.navigation.navigate('Login')
    }

    registerButton = () => {
        isError = false
        // var dummy = {
        //     firstName : "abc",
        //     lastName : this.state.lastName
        // }
        // firebase.database.database().ref('/user').push(dummy)

        console.warn('Register Button Clicked');
        if(this.state.firstName == ''){
            this.state.firstNameErr = "Field Required"
            this.setState({
                ...this.state
            })
            isError = true
        }
        if(this.state.lastName == ''){
            this.state.lastNameErr = "Field Required"
            this.setState({
                ...this.state
            })
            isError = true
        }
        if(this.state.email == ''){
            this.state.emailErr = "Field Required"
            this.setState({
                ...this.state
            })
            isError = true
        }
        if(this.state.password == ''){
            this.state.passwordErr = "Field Required"
            this.setState({
                ...this.state
            })
            isError = true
        }
        if(this.state.confirmPassword == ''){
            this.state.confirmPasswordErr = "Field Required"
            this.setState({
                ...this.state
            })
            isError = true
        }

        if(!isError){
            if(this.state.password === this.state.confirmPassword){
                var obj = {
                    firstName : this.state.firstName,
                    lastName : this.state.lastName,
                    email : this.state.email,
                    password : this.state.password
                }
                firebase.database.database().ref("/User").push(obj)
                firebase.firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then((success) => {
                    console.warn("Success" + success);
                
                    // firebase.database.database().ref("/User").push(obj)

                    this.setState({
                        firstName : '',
                        email : '',
                        password : ''
                    })
                    this.props.navigation.navigate('Login')
                })
                    .catch((error) => {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.warn("Error Code of Create User : " + errorCode);
                        console.warn("Error Message of Create User : " + errorMessage);
                        if (errorCode == 'auth/weak-password') {
                            console.warn('The password is too weak.');

                            //     <Button onClick={() => this.handleClick()}>
                            //         Bottom-Center
                            // </Button>
                        } else {
                            alert(errorMessage);
                        }
                        console.warn(error);
                    });
                    // var path = '/Login'
                    // this.props.history.push(path)
                
            }else{
                this.state.confirmPasswordErr = 'Password Did Not Match'

                this.setState({
                    ...this.state
                })
                console.warn(`Password does not match`)
            }
        }else{
            console.warn(`Details not valid \n Please check if you have entered correct details`)
        }

        }

    render(){

        // console.warn("Render " + this.state.password);
        
        return(
            <ScrollView>
            <View style = {styles.registerContainer}>
                <View style = {styles.registerSubContainer}>
                    <View style = {styles.combinedDiv}>
                    <View>
                        <Image style = {styles.registerImage}
                            source = {require('../Assets/fundoo2.jpeg')}
                        />
                        <Text style = {styles.registerFundooapp}> FundooApp </Text>
                        <Text style = {styles.label}> Create Your Google Account </Text>
                    </View>

                    <View style = {styles.componentDiv}>
                    <View style = {styles.firstName}>
                        <Input
                        value = {this.state.firstName}
                        placeholder = 'Enter First Name *'
                        onChangeText = {(text) => this.validateFirstName(text)}
                        // onEndEditing
                        errorMessage = {this.state.firstNameErr}/>
                    </View>

                    <View style = {styles.lastName}>
                        <Input
                        value = {this.state.lastName}
                        placeholder = 'Enter Last Name *'
                        onChangeText = {(text) => this.validateLastName(text)}
                        errorMessage = {this.state.lastNameErr}/>
                    </View>

                    <View style = {styles.registerEmail}>
                        <Input
                        value = {this.state.email}
                        placeholder = 'Email ID *'
                        onChangeText = {(text) => this.validateEmail(text, 'email')}
                        errorMessage = {this.state.emailErr}/> 
                        {/* <Text style = {styles.gmailText}> @gmail.com </Text> </Input> */}
                    </View>

                    <View style = {styles.registerPassword}>
                        <Input
                        value = {this.state.password}
                        placeholder = 'Password *'
                        textContentType = "password"
                        secureTextEntry  = {true}
                        // onChangeText = {(text) => this.setState({
                        //     password:text
                        // })}
                        onChangeText = {(text) => this.validatePassword(text, 'password')}
                        // onChangeText = {(text) => this.validatePassword(text, 'password')}
                        errorMessage = {this.state.passwordErr}/>
                        <Text style = {{color : '#0000ff'}}> * Use 8 or more characters with a mix of letters, numbers & symbols * </Text>
                        {/* <Text style = {styles.gmailText}> @gmail.com </Text> </Input> */}
                    </View>

                    <View style = {styles.confirmPassword}>
                        <Input
                        value = {this.state.confirmPassword}
                        placeholder = 'Confirm Password *'
                        textContentType = "password"
                        secureTextEntry  = {true}
                        onChangeText = {(text) => this.setState({
                            confirmPassword : text
                        })}
                        onEndEditing = {this.validateConfirmPassword}
                        errorMessage = {this.state.confirmPasswordErr}/> 
                        
                        
                        <TouchableOpacity onPress = {this.eyeClick}>
                            <Image style = {{width : 40, height : 30}} 
                            source = {require('../Assets/Password.png')}/>
                        </TouchableOpacity>
                    </View>

                        <View style = {styles.signInRegister}>
                            <TouchableOpacity onPress = {() => this.signInClick()}>
                            <Text style = {styles.signInLabel}> Sign In Instead </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {this.nextButton}>
                            <Button title = "Register"
                            style = {styles.registerButton}
                            onPress = {this.registerButton}/>
                            </TouchableOpacity>
                        </View>
                        {/* <Text style = {styles.gmailText}> @gmail.com </Text> </Input> */}
                    
                        </View>
                        </View>
                </View>
            </View>
            </ScrollView>
        )
    }
}

export default Register