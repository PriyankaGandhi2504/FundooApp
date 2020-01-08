import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import styles from './StyleSheets'
import firebase from '../Firebase'
import Dashboard from './Dashboard'
import Snackbar from 'react-native-snackbar';
import { AsyncStorage } from 'react-native';
import ColorPalette from 'react-native-color-palette'
import noteData from '../../UserServices'
const NoteData = new noteData
import Reminder from './Reminder'
import RBSheet from "react-native-raw-bottom-sheet";
import AddBoxMenu from './AddBoxMenu'
import { Provider } from 'react-redux'
import store from './SignOutStore'
import setColor from './SignOutAction'
import { connect } from 'react-redux'
import { Chip } from 'react-native-paper'
import FastImage from 'react-native-fast-image'

var filledPinIcon = require('../Assets/FilledPin.png')
var outlinedPinIcon = require('../Assets/Pinned.png')
var dateAndTime = '';
var dataToUpdate, chosenImageFromGallery

class CreateNote extends Component {
    constructor(props) {
        const { navigation } = props
        dataToUpdate = navigation.getParam('clickedNote', '')        
        chosenImageFromGallery = navigation.getParam('chosenImage', '')
        super(props)
        this.state = {
            Title: '',
            Note: '',
            menuIconVisibility: false,
            menuListDisplay: {
                display: 'none'
            },
            notes: [],
            fetchedUserId: '',
            backgroundColor: 'white',
            backgroundChange: false,
            note: '',
            title: '',
            KeyValue: '',
            notesKeys: [],
            isArchive: false,
            isPin: false,
            isReminderVisible: false,
            reminderVisibility: {
                display: 'none'
            },
            shouldReminderSet: false,
            reminderSetVisibility: {
                display: 'none'
            },
            isDeleted: false,
            toUpdateOrCreate: false,
            pinIcon: outlinedPinIcon,
            data: '',
            chosenImage: chosenImageFromGallery,
            chosenImageFromDB: ''
        }
    }

    handleBackArrowToCreate = () => {
        var noteObj = {
            Title: this.state.Title,
            Note: this.state.Note
        }
        if (this.state.Note === '' && this.state.Title === '') {
            Snackbar.show({
                title: 'Empty Note Discarded',
                duration: 1000
            });
            this.props.navigation.navigate('Dashboard')
        } else {
            var array = this.state.notes
            array.push(noteObj)
            this.setState({
                notes: array
            })
            var noteObject = {
                Title: this.state.Title,
                Note: this.state.Note,
                fetchedUserId: this.state.fetchedUserId,
                isArchive: this.state.isArchive,
                isPin: this.state.isPin,
                Color: this.state.backgroundColor,
                Reminder: dateAndTime,
                Deleted: this.state.isDeleted,
                chosenImage: this.state.chosenImage
            }
            const pushedData = firebase.database.database().ref('/Notes').push(noteObject)
            // const key = pushedData.key
            this.props.navigation.navigate('Dashboard')
        }
    }

    handleBackArrowToUpdate = () => {
        var noteObject = {
            Note: this.state.Note,
            Title: this.state.Title,
            fetchedUserId: this.state.fetchedUserId,
            isArchive: this.state.isArchive,
            isPin: this.state.isPin,
            Color: this.state.backgroundColor,
            Reminder: dateAndTime,
            Deleted: this.state.isDeleted,
            chosenImage: this.state.chosenImageFromDB
        }
        firebase.database.database().ref('Notes').child(this.state.KeyValue).update(noteObject)
        this.props.navigation.navigate('Dashboard')
    }

    menuIcon = () => {
        if (!this.state.menuIconVisibility) {
            this.setState({
                menuListDisplay: styles.menuList,
                menuIconVisibility: true,
            })
        } else {
            this.setState({
                menuIconVisibility: false,
                menuListDisplay: {
                    display: 'none'
                }
            })
        }
    }

    changeColor = (color) => {
        if (!this.state.backgroundChange) {
            this.setState({
                backgroundColor: color
            })
        } else {
            this.setState({
                backgroundColor: 'white'
            })
        }
    }

    componentDidMount = async () => {
        const { navigation } = this.props
        dataToUpdate = navigation.getParam('clickedNote', '')
        console.log('Data To Update From create not ', dataToUpdate);
        
        chosenImageFromGallery = navigation.getParam('chosenImage', '')
        await this.setState({
            KeyValue: dataToUpdate.key
        })
        if (this.state.KeyValue !== undefined) {
            await this.setState({
                Note: dataToUpdate.Note,
                Title: dataToUpdate.Title,
                backgroundColor: dataToUpdate.Color,
                chosenImageFromDB: dataToUpdate.chosenImage
            })
        }
        if (dataToUpdate.isPin) {
            await this.setState({
                isPin: dataToUpdate.isPin,
                pinIcon: filledPinIcon
            })
        }
    }

    componentDidUpdate = (props, state) => {
        const { navigation } = this.props
        chosenImageFromGallery = navigation.getParam('chosenImage', '')
        if (this.state.chosenImage !== chosenImageFromGallery) {
            this.setState({
                chosenImage: chosenImageFromGallery
            })
        }
    }

    handlePinnedNotes = async () => {
        if (!this.state.isPin) {
            await this.setState({
                isPin: true,
                pinIcon: filledPinIcon
            })
        } else {
            this.setState({
                isPin: false,
                pinIcon: outlinedPinIcon
            })
        }
    }

    handleReminder = async () => {
        await this.setState({
            isReminderVisible: !this.state.isReminderVisible,
            reminderVisibility: {
                width: '100%'
            },
        })
    }

    handleReminderDisplay = async () => {
        await this.setState({
            shouldReminderSet: !this.state.shouldReminderSet,
            reminderSetVisibility: {
                width: '50%'
            }
        })
    }

    handleArchive = async () => {
        await this.setState({
            isArchive: !this.state.isArchive,
        })

        Snackbar.show({
            title: 'Note Archived',
            duration: 1000,
            action: {
                title: 'UNDO',
                color: 'green',
                onPress: () => {
                    this.state.isArchive = !this.state.isArchive
                    firebase.database.database().ref('Notes').child(this.state.KeyValue).update({ isArchive: this.state.isArchive })
                }
            }
        });
        firebase.database.database().ref('Notes').child(this.state.KeyValue).update({ isArchive: this.state.isArchive, Color: this.state.backgroundColor })
        this.props.navigation.goBack()
    }

    handleDelete = async () => {
        await this.setState({
            isDeleted: !this.state.isDeleted
        })

        Snackbar.show({
            title: 'Note moved to Bin',
            duration: 1000,
            action: {
                title: 'UNDO',
                color: 'green',
                onPress: () => {
                    this.state.isDeleted = !this.state.isDeleted
                    firebase.database.database().ref('Notes').child(this.state.KeyValue).update({ Deleted: this.state.isDeleted })
                }
            }

        });
        firebase.database.database().ref('Notes').child(this.state.KeyValue).update({ Deleted: this.state.isDeleted })
        this.props.navigation.goBack()
    }

    render() {
        AsyncStorage.getItem('UserId').then((success) => {
            this.state.fetchedUserId = success
        })
        const { navigation } = this.props
        dateAndTime = navigation.getParam('date', '')
        return (
            <View style={styles.createNoteContainer}>
                <View style={{ width: "100%", height: "100%", backgroundColor: this.state.backgroundColor }}>
                    <View style={styles.headerContainer}>
                        <View style={styles.arrowContainer}>
                            <TouchableOpacity onPress={this.state.KeyValue === undefined ? this.handleBackArrowToCreate : this.handleBackArrowToUpdate} >
                                <Image style={{ width: 35, height: 35 }}
                                    source={require('../Assets/BackArrow.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.restContainer}>
                            <TouchableOpacity onPress={this.handlePinnedNotes}>
                                <Image style={{ width: 25, height: 25, marginTop: 6 }}
                                    source={this.state.pinIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.handleReminder}>
                                <Image style={{ width: 25, height: 25, marginTop: 5 }}
                                    source={require('../Assets/Reminder.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.handleArchive}>
                                <Image style={{ width: 25, height: 25, marginTop: 3 }}
                                    source={require('../Assets/Archive.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.titleText}>
                        <View style={this.state.chosenImage === '' ? this.state.chosenImageFromDB === '' ? { display: 'none' } : { width: 'auto', height: 'auto' } : { width: 'auto', height: 'auto' }}>
                            <FastImage style={{ width: 400, height: 400 }}
                                source={this.state.chosenImage === '' ? this.state.chosenImageFromDB : this.state.chosenImage}
                                resizeMode={FastImage.resizeMode.contain} />
                        </View>
                        <TextInput style={{ fontSize: 24 }}
                            value={this.state.Title}
                            placeholder="Title"
                            onChangeText={(text) => this.setState({
                                Title: text
                            })}
                        />
                        <View style={this.state.shouldReminderSet === true ? { width: '50%' } : { display: 'none' }}>
                            <Chip icon={require('../Assets/Reminder.png')}
                                style={{ width: '45%' }}
                                style={{ borderWidth: 0.5, borderColor: 'black', backgroundColor: this.state.backgroundColor, top: 5 }}
                                mode='flat'
                            >
                                {dateAndTime}
                            </Chip>
                        </View>
                        <ScrollView>
                            <TextInput style={{ fontSize: 18 }}
                                multiline
                                value={this.state.Note}
                                numberOfLines={3}
                                maxLength={150}
                                placeholder="Note"
                                onChangeText={(text) => this.setState({
                                    Note: text
                                })} />
                        </ScrollView>
                    </View>

                    <View style={styles.footerComponents}>
                        <View style={this.state.menuListDisplay}>
                            <View style={styles.delete}>
                                <TouchableOpacity style={{ width: "100%" }}
                                    onPress={this.handleDelete}>
                                    <Image style={{ width: 20, height: 20, left: 10, top: 10 }}
                                        source={require('../Assets/DeleteIcon.png')} />
                                    <Text style={{ fontSize: 20, left: 80, bottom: 12 }}>
                                        Delete
                                </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.makeCopy}>
                                <TouchableOpacity style={{ width: "100%" }}>
                                    <Image style={{ width: 20, height: 20, left: 10, top: 10 }}
                                        source={require('../Assets/CopyIcon.png')} />
                                    <Text style={{ fontSize: 20, left: 80, bottom: 12 }}>
                                        Make a Copy
                                </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.send}>
                                <TouchableOpacity style={{ width: "100%" }}>
                                    <Image style={{ width: 20, height: 20, left: 10, top: 10 }}
                                        source={require('../Assets/SendIcon.png')} />
                                    <Text style={{ fontSize: 20, left: 80, bottom: 12 }}>
                                        Send
                                </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.collaborator}>
                                <TouchableOpacity style={{ width: "100%" }}>
                                    <Image style={{ width: 30, height: 20, left: 6, top: 10 }}
                                        source={require('../Assets/CollaboratorIcon.png')} />
                                    <Text style={{ fontSize: 20, left: 80, bottom: 12 }}>
                                        Collaborator
                                </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.labels}>
                                <TouchableOpacity style={{ width: "100%" }}>
                                    <Image style={{ width: 20, height: 20, left: 10, top: 10 }}
                                        source={require('../Assets/LabelIcon.png')} />
                                    <Text style={{ fontSize: 20, left: 80, bottom: 12 }}>
                                        Labels
                                </Text>
                                </TouchableOpacity>
                            </View>

                            <ScrollView horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                <View style={styles.colorPaletteStyle}>
                                    <TouchableOpacity style={{ width: "100%" }}>
                                        {/* <View> */}
                                        <View style={{ top: -28, height: 40, bottom: 20 }}>
                                            <ColorPalette
                                                onChange={color => this.changeColor(color)}
                                                defaultColor={'#ffffff'}
                                                colors={['#ffffff', '#bfef45', '#fffac8', '#ffd8b1', '#fabebe', '#aaffc3', '#42d4f4', '#9B59B6', '#e6194B', '#2980B9']}
                                                title={""}
                                                icon={
                                                    <Image style={{ width: 15, height: 15 }}
                                                        source={require('../Assets/CheckMark.png')} />
                                                }
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>

                        <View style={styles.addItemIcon}>
                            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                                <TouchableOpacity onPress={() => { this.RBSheet.open() }}>
                                    <Image style={{ width: 40, height: 40, left: 5, bottom: 5 }}
                                        source={require('../Assets/AddItems.png')} />
                                </TouchableOpacity>
                                <RBSheet
                                    ref={ref => {
                                        this.RBSheet = ref;
                                    }}
                                    height={250}
                                    duration={250}
                                    customStyles={{
                                        container: {
                                            justifyContent: "center",
                                            alignItems: "center",
                                            bottom: 50
                                        }
                                    }}>
                                    <AddBoxMenu navigation={this.props.navigation} />
                                </RBSheet>
                            </View>
                        </View>

                        <View style={styles.menuIcon}>
                            <TouchableOpacity onPress={this.menuIcon}>
                                <Image style={{ width: 20, height: 25, marginTop: 5, marginRight: 20 }}
                                    source={require('../Assets/Menu.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ display: this.state.isReminderVisible ? 'flex' : 'none' }}>
                        <Reminder navigation={this.props.navigation} handleReminder={this.handleReminder} handleReminderSet={this.handleReminderDisplay} />
                    </View>

                </View>
            </View>
            //</Provider>
        )
    }
}

// const mapStateToProps = (state, ownProps) => {
//     return {
//         color : state.color
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setColor : color => dispatch(setColor.setColor(color))
//     }
// }
export default CreateNote