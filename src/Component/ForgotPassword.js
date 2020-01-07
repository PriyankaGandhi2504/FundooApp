import React, {Component} from 'react'
import {Text, View, Button, ScrollView} from 'react-native'
import styles from './StyleSheets'
import { Input } from 'react-native-elements'
import firebase from '../Firebase'
import Login from './Login'

class ForgotPassword extends Component{
    constructor(props){
        super(props)
        this.state = {
            email : '',
            emailErr : ''
        }
    }

    handleForgotPass = (text, type) => {
        this.state.email = text
        var emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        let isError = false
        if(type == 'email'){
            if(emailRegex.test(this.state.email)){
                this.state.emailErr = ''
                this.setState({
                    ...this.state
                })
            }else{
                this.state.emailErr = "Invalid Text"
                this.setState({
                    ...this.state
                })
            }  
        }
    }

    handleSubmit = () => {
        isError = false
        if(this.state.email == ''){
            this.state.emailErr = "Field Required"
            this.setState({
                ...this.state
            })
            isError = true
        }

        if(!isError){
            firebase.firebase.auth().sendPasswordResetEmail(this.state.email)
            .then((success) => {
                alert(`Reset password link sent to your email Id. \n Please Login to continue`)
                this.setState({
                    email : ''
                })
                this.props.navigation.navigate('Login')
            })
            .catch((error) => {
                this.state.emailErr = 'No user record found corresponding to the given Email Id'
                this.setState({
                    ...this.state
                })
            })
        }
    }

    render(){
        return(
            <View style = {styles.forgotPassContainer}>
                <View style = {styles.forgotSubContainer}>
                    <View style = {styles.forgotPassword}>
                        <Text style = {styles.forgotLabel}>
                            Forgot Password
                        </Text>
                        <Text style = {styles.recoveryEmail}>
                            Enter Your Recovery Email ID
                        </Text>
                    </View>

                    <View style = {styles.forgotEmailInput}>
                        <Input
                        value = {this.state.email}
                        placeholder = 'Email ID'
                        onChangeText = {(text) => this.handleForgotPass(text, 'email')}
                        errorMessage = {this.state.emailErr}
                        />
                    </View>

                    <View style = {styles.submitButton}>
                        <Button
                        title = "Submit"
                        onPress = {this.handleSubmit}/>
                    </View>
                </View>
            </View>
        )
    }
}

export default ForgotPassword