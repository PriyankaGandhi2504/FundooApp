import React, {Component} from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView} from 'react-native'
import userData from '../../UserServices'
const UserData = new userData
import Note from './Note'

class DeletedNotes extends Component{

    constructor(props){
        super(props)
        this.state = {
            deletedNotes : [],
            gridDisplay : false
        }
    }

    componentDidMount = async() => {
        var details = UserData.userData()
        console.log("Details from Deleted Notes " + JSON.stringify(details));
        await this.setState({
            deletedNotes : details
        })
    console.log("Archived Notes " + JSON.stringify(this.state.deletedNotes));
    }

render(){
    return(
        <View>
            <View style = {{display : 'flex', flexDirection : 'row'}}>
                <View>
                    <TouchableOpacity style={{ width: 50 }}
                    onPress={this.props.navigation.openDrawer}
                    >
                        <Image style={{ width: 30, height: 30, left: 10, top: 3 }}
                        source={require('../Assets/DrawerIcon.png')} />
                    </TouchableOpacity>
                </View>

                <View style = {{width : '60%', display : 'flex', alignItems : 'center'}}>
                    <Text style = {{fontSize : 20, top : 5}}> Deleted </Text>
                </View>

                <View style = {{width : 100, alignItems : 'flex-end'}}>
                    <TouchableOpacity style = {{width : 35}}>
                        <Image style = {{width : 20, height : 30}}
                        source = {require('../Assets/Menu.png')}/>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView>
                <View>
                {
                    this.state.deletedNotes.map((deletedNotes, indexes) => {
                        if(deletedNotes.Deleted){
                            return(
                                <Note index = {indexes} Title = {deletedNotes.Title} Note = {deletedNotes.Note} navigation = {this.props.navigation} gridDisplayValue = {this.state.gridDisplay} Color = {deletedNotes.Color} Reminder = {deletedNotes.Reminder}/>
                            )
                        }
                })}
                </View>
            </ScrollView>
        </View>
    )
}
}

export default DeletedNotes