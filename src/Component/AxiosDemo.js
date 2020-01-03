import React, {Component} from 'react'
import axios from 'axios'
import {View, Text} from 'react-native'

class AxiosDemo extends Component{

    constructor(props){
        super(props)
        this.state = {
            data : []
        }
    }

    componentDidMount = () => {
       axios.get('https://reactnative-b924a.firebaseio.com/Notes.json')
       .then((response) => {
           const data = Object.keys(response.data)
           this.setState({ data })
       })
    }

render(){
    return(
        <View>
           {
               Object.getOwnPropertyNames(this.state.data).map((key, index) => {
                   const note = this.state.data[key].Note
                   return <Text> {note} </Text>
               })
           }
        </View>
    )
}
}

export default AxiosDemo