import React, { Component } from 'react'
import { View, Text, Image, AsyncStorage } from 'react-native'

class SplashScreen extends Component {

    componentDidMount() {
        AsyncStorage.getItem('isAuthenticatedUser').then((data) => {
            isAuthenticatedUser = data
            if (isAuthenticatedUser === 'true') {
                this.isAuthenticated()
            }
            else {
                this.goToLogin()
            }
        })
            .catch((error) => {
                this.goToLogin()
            })
    }

    isAuthenticated() {
        this.props.navigation.navigate('DrawerRouter')
    }

    goToLogin() {
        setTimeout(() => {
            this.props.navigation.navigate('Login')
        }, 3000)
    }

    render() {
        return (
            <View style={{ width: '100%', height: '100%', backgroundColor: '#ffecb3', justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ height: 200, width: 200 }}
                    source={require('../Assets/fundoo1.png')} />
                <Text style={{ top: 40, fontSize: 30, fontWeight: 'bold', color: '#664d00' }}>
                    Welcome To FundooApp
                </Text>
            </View>
        )
    }
}

export default SplashScreen