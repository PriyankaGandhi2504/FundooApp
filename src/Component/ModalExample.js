// import React, {Component} from 'react';
// import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';
// import MyModal from '../Component'

// class ModalExample extends Component {
//   constructor (props) {
//     super(this.props)
//     this.state = {
//       isModalVisible: false,
//     };
//   }

//   changeModalVisibility = (bool) => {
//     this.setState({
//       isModalVisible : bool
//     })
//   }



//   render() {
//     return (
//       <View>
//         <TouchableHighlight onPress = {() => {this.changeModalVisibility(true)}}>
//           <Text> Open Modal </Text>
//         </TouchableHighlight>
//         <Modal visible = {this.state.isModalVisible} onRequestClose = {() => {this.changeModalVisibility(false)}}>
//           <MyModal changeModalVisibility = {this.changeModalVisibility}></MyModal>
//         </Modal>
//       </View>
//     );
//   }
// }

// export default ModalExample