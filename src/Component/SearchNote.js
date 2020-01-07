import React, { Component } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import Dashboard from './Dashboard'
import { TextInput } from 'react-native-paper'
import Note from './Note'
import userData from '../../UserServices'
import { ScrollView } from 'react-native-gesture-handler'
const UserData = new userData

class SearchNote extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchedText: '',
            notesArray: [],
            noteDisplay: {
                display: 'none'
            },
        }
    }

    componentDidMount = () => {
        UserData.userData((response) => {
            this.setState({
                notesArray: response
            })
        })
    }

    handleBackArrow = () => {
        this.props.navigation.navigate('Dashboard')
    }

    handleSearchNote = (value) => {
        this.setState({
            searchedText: value
        })
    }

    handleCrossIcon = async () => {
        await this.setState({
            searchedText: ''
        })
    }

    render() {
        return (
            <View style={{ height: '100%', width: '100%' }}>
                <View style={{ height: 50, borderBottomWidth: 0.5, elevation: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={this.handleBackArrow}>
                        <View>
                            <Image style={{ width: 30, height: 30, top: 10 }}
                                source={require('../Assets/BackArrow.png')} />
                        </View>
                    </TouchableOpacity>

                    <View style={{ width: 300, height: 60 }}>
                        <TextInput style={{ height: 50, width: '100%' }}
                            value={this.state.searchedText}
                            placeholder='Search your notes'
                            onChangeText={(value) => this.handleSearchNote(value)} />
                    </View>

                    <TouchableOpacity onPress={this.handleCrossIcon}>
                        <View style={{ width: '90%', display: 'flex', alignItems: 'flex-end' }}>
                            <Image style={{ width: 30, height: 30, top: 10, tintColor: 'grey' }}
                                source={require('../Assets/Cross.png')} />
                        </View>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View>
                        {
                            Object.getOwnPropertyNames(this.state.notesArray).map((key, indexes) => {
                                var dummyNote = String(this.state.notesArray[key].Note)
                                var dummyTitle = String(this.state.notesArray[key].Title)
                                if (dummyNote.toLowerCase().indexOf(this.state.searchedText.toLowerCase()) > -1 || dummyNote.toLowerCase().indexOf(this.state.searchedText.toLowerCase()) > -1 ||
                                    dummyTitle.toLowerCase().indexOf(this.state.searchedText.toLowerCase()) > -1 || dummyTitle.toLowerCase().indexOf(this.state.searchedText.toLowerCase()) > -1) {
                                    return (
                                        <Note index={indexes} Title={this.state.notesArray[key].Title} Note={this.state.notesArray[key].Note}
                                            navigation={this.props.navigation} gridDisplayValue={false}
                                            Color={this.state.notesArray[key].Color} Reminder={this.state.notesArray[key].Reminder} />
                                    )
                                }
                            })
                        }
                    </View>
                </ScrollView>

            </View>
        )
    }
}

export default SearchNote