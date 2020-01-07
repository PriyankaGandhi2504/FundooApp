import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './StyleSheets'

class ToggleSearchbarMenu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            archivedNotesDisplay: {
                display: 'none'
            },
            notesArchived: false
        }
    }

    handleArchive = () => {

    }

    render() {
        return (
            <View style={styles.toggleMenu}>
                <View style={styles.toggleSearchbarMenu}>
                    <TouchableOpacity style={{ width: '100%' }}
                        onPress={this.handleArchive}>
                        <View style={{ height: 59 }}>
                            <Text style={{ fontSize: 20, left: 20, top: 20 }}>
                                Archive
                                </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: '100%' }}>
                        <View style={{ height: 59 }}>
                            <Text style={{ fontSize: 20, left: 20, top: 20 }}>
                                Delete
                                </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: '100%' }}>
                        <View style={{ height: 59 }}>
                            <Text style={{ fontSize: 20, left: 20, top: 20 }}>
                                Make a Copy
                                </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: '100%' }}>
                        <View style={{ height: 59 }}>
                            <Text style={{ fontSize: 20, left: 20, top: 20 }}>
                                Send
                                </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: '100%' }}>
                        <View style={{ height: 60 }}>
                            <Text style={{ fontSize: 18, left: 20, top: 20 }}>
                                Copy to Google Docs
                                </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default ToggleSearchbarMenu