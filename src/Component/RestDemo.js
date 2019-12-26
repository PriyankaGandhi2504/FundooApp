import React, {Component} from 'react'
import {View, Text, ActivityIndicator} from 'react-native'

class RestDemo extends Component{

    constructor(props){
        super(props)
        this.state = {
            isLoading : true,
            dataSource : null
        }
    }

    componentDidMount = () => {
        return fetch('https://jsonplaceholder.typicode.com/todos.json')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                isLoading : false,
                dataSource : responseJson
            })
            console.log('Data Source in Did Mount ' + JSON.stringify(this.state.dataSource));
            
            console.log('Response json ' + JSON.stringify(responseJson));
        })
        .catch((error) => {
            console.log("Error : " + error);            
        })

        // fetch('https://myapiexample/endpoint/', {
        //     method : 'POST',
        //     headers : {
        //         Accept : 'application/json',
        //         'Content-Type' : 'application/json'
        //     },
        //     body : JSON.stringify({
        //         firstParam : 'yourValue',
        //         secondParam : 'yourOtherValue'
        //     })
        // })
    }

    render(){

        if(this.state.isLoading){
            return(
                <View>
                    <ActivityIndicator/>
                </View>
            )
        }else{
            console.log('data source ' + JSON.stringify(this.state.dataSource));
            // let notes = this.state.dataSource.map((val, key) => {
            //     return <View key = {key}>
            //         <Text> abc </Text>
            //     </View>
            // })
            return(
                <View>
                    <Text> Content Loaded </Text>
                </View>
            )
        }
    }
}

export default RestDemo