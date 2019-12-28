import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

class RestDemo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            dataSource: null
        }
    }

    componentDidMount = () => {
        return fetch('https://reactnative-b924a.firebaseio.com/.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.User
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
                <View>
                    {/* <Text>gfiiff</Text> */}
                    {Object.keys(this.state.dataSource).map((val, key) => {
                        console.log("key", key);
                        console.log('Value ', this.state.dataSource[val]);

                        return <View key={key}>
                            {
                                Object.keys(this.state.dataSource[val]).map((value, key) => {
                                    console.log('Value of Key ', this.state.dataSource[val]);
                                })
                            }
                            <Text> Abc </Text>
                            {/* <Text> {this.state.dataSource[val]} </Text>  */}
                        </View>
                    })}
                </View>
            )
        }
    }
}

export default RestDemo