import React, { Component } from 'react'
import { View, Text, Image ,AsyncStorage} from 'react-native'

class SplashScreen extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        var isAuthenticate=''
        AsyncStorage.getItem('isAuthenticatedUser').then((data) =>{
                 console.log('isAuthenticatedUser value',data)
                 console.log('typeof data',typeof(data))
                 isAuthenticatedUser = data
                 if(isAuthenticatedUser === 'true'){
                    this.isAuthenticated()
                 }
                 else{
                    this.goToLogin()
                
                 }
                
                 console.log('isAuthenticate in getItem',isAuthenticatedUser) })

                 .catch((error) => {
                        this.goToLogin()
                 })
    }

    isAuthenticated(){
        
           this.props.navigation.navigate('Router')     
    }

    goToLogin(){
        setTimeout(() => {
                        this.props.navigation.navigate('Login')
                },3000)
    }

    render() {
        console.log('props os navigation',this.props.navigation)
        return (
            <View style={{ width : '100%', height : '100%', backgroundColor: '#ffecb3' , justifyContent: 'center' , alignItems:'center' }}>

              <Image style={{ height: 200, width: 200 , top : -100}}
                    source={require('../Assets/fff.png')} />

                <Text style = {{top : -80 , fontSize: 30 , fontWeight:'bold' , color:  '#664d00'}}>
                    Welcome To FundooApp
                </Text>

            </View>
        )
    }
}

export default SplashScreen