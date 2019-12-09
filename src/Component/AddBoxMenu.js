import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'

class AddBoxMenu extends Component{
    render(){
        return(
            <View style = {{height : '100%',width : '100%'}}>
                <View>
                    <View style = {{height : 50}}>
                        <TouchableOpacity style = {{display : 'flex', flexDirection : 'row'}}>
                            <Image style = {{width : 30, height : 30, top : 10, left : 15}}
                            source = {require('../Assets/takePhoto.png')}/>
                            <Text style = {{fontSize : 20, top : 10, left : 40}}> Take photo </Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style = {{height : 50}}>
                        <TouchableOpacity style = {{display : 'flex', flexDirection : 'row'}}>
                            <Image style = {{width : 30, height : 30, top : 10, left : 15}}
                            source = {require('../Assets/chooseImage.png')}/>
                            <Text style = {{fontSize : 20, top : 10, left : 40}}> Choose image</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style = {{height : 50}}>
                        <TouchableOpacity style = {{display : 'flex', flexDirection : 'row'}}>
                            <Image style = {{width : 30, height : 30, top : 10, left : 15}}
                            source = {require('../Assets/drawing.png')}/>
                            <Text style = {{fontSize : 20, top : 10, left : 40}}> Drawing </Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style = {{height : 50}}>
                        <TouchableOpacity style = {{display : 'flex', flexDirection : 'row'}}>
                            <Image style = {{width : 30, height : 30, top : 10, left : 15}}
                            source = {require('../Assets/recording.png')}/>
                            <Text style = {{fontSize : 20, top : 10, left : 40}}> Recording </Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style = {{height : 50}}>
                        <TouchableOpacity style = {{display : 'flex', flexDirection : 'row'}}>
                            <Image style = {{width : 30, height : 30, top : 10, left : 15}}
                            source = {require('../Assets/tickBox.png')}/>
                            <Text style = {{fontSize : 20, top : 10, left : 40}}> Tick Boxes </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default AddBoxMenu