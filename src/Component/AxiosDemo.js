import React, { Component } from 'react'
import axios from 'axios'
import { View, Text, Button } from 'react-native'
import styles from './StyleSheets'

class AxiosDemo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount = () => {
        axios.get('https://reactnative-b924a.firebaseio.com/Notes.json')
            .then((response) => {
                const data = Object.values(response.data)
                this.setState({ data })
            })
    }

    handleUserPost = (obj) => {
        axios.post('https://reactnative-b924a.firebaseio.com/User.json', obj)
            .then((success) => {
                console.log('Success in Post Then ', success);
            })
            .catch((error) => {
                console.log('Error in Post Catch ', error);
            })
    }

    handleDelete = () => {
        axios.delete('https://reactnative-b924a.firebaseio.com/Notes/-LxaZB2-NsN3vY6rhLiL.json')
            .then((success) => {
                console.log('Success In delete ', success)
            })
    }

    handlePatch = () => {
        axios.patch('https://reactnative-b924a.firebaseio.com/Notes/-LxAPmtKZnc3-5alnqXC.json', { Note: 'Patch Value Updated' })
            .then((success) => {
                console.log('Success In Patch Method ', success.data);
            })
    }

    render() {
        return (
            <View>
                <View>
                    {
                        Object.getOwnPropertyNames(this.state.data).map((key, index) => {
                            const note = this.state.data[key].Note
                            return <Text> {note} </Text>
                        })
                    }
                </View>

                {/* <View style={{ width: 100 }}>
                    <Button title='POST'
                        onPress={this.handleUserPost} />
                </View> */}

                <View style={{ top: 10, width: 100 }}>
                    <Button title='DELETE'
                        onPress={this.handleDelete} />
                </View>

                <View style={{ top: 20, width: 100 }}>
                    <Button title='PATCH'
                        onPress={this.handlePatch} />
                </View>
            </View>
        )
    }
}

export default AxiosDemo