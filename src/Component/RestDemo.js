import React, { Component } from 'react'
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'

class RestDemo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            dataSource: null,
            value: []
        }
    }

    componentDidMount = () => {
        return fetch('https://reactnative-b924a.firebaseio.com/.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.User
                }, () => {
                })

            })
            .catch((error) => {
                console.log("Error : " + error);
            })

        // return fetch('https://reactnative-b924a.firebaseio.com/', {
        // method : 'POST',
        // headers : {
        //     Accept : 'Notes/json',
        //     'Content-Type' : 'Notes/json'
        // },
        // body : JSON.stringify({
        //     Note : 'yourValue',
        //     Title : 'yourOtherValue'
        //     })
        // }) .then((response) => response.json())
        // .then((responseJson) => {
        //     this.setState({
        //         isLoading : false,
        //         dataSource : responseJson.Notes
        //     }, () => {console.log('Data Source In Did Mount ', this.state.dataSource)})
        // })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View>
                    <ActivityIndicator />
                </View>
            )
        } else {
            console.log('data source ', this.state.dataSource);
            return (
                <ScrollView>
                    <View>
                        {Object.keys(this.state.dataSource).map((val, key) => {
                            console.log("key", key);
                            console.log('Value ', this.state.dataSource[val]);
                            console.log('Value of Key ', this.state.dataSource[val]);
                            return <Text> {this.state.dataSource[val].email} </Text>
                        })}
                    </View>
                </ScrollView>
            )
        }
    }
}

export default RestDemo