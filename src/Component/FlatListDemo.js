import React, { Component } from 'react';
import {View, FlatList, StyleSheet, Text, Image, ActivityIndicator} from 'react-native';
import userData from '../../UserServices'
const UserData = new userData
// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

// function Item({ title }) {
//   return (
//     <View style={styles.item}>
//       <Text style={styles.title}>{title}</Text>
//     </View>
//   );
// }


export default class FlatListDemo extends Component {

  constructor(){
    super()
    this.state = {
      data : [],
      page : 1,
      isLoading : false
    }
  }


  componentDidMount(){
  // console.log("await ");
  
  var details = UserData.userData()
  // console.log("received");
  
  console.log("Details " + JSON.stringify(details));
  this.setState({
      data : details
  })
  console.log("Users Note " + this.state.usersNote);
  // console.log("Component Did Mount");
  
}


  getData = async ()=> {
    // console.log(" get data ");
    
    const url = 'https://jsonplaceholder.typicode.com/photos?_limit=15&_page='+this.state.page
    fetch(url).then((response) => response.json())
    .then((responseJson) => {
      // console.log( " Response Json " + JSON.stringify(responseJson));
      // var array = 
      this.setState({
        data : responseJson,
        // data : JSON.stringify(responseJson),
        isLoading : false
      })

    })
  }

  

  renderRow = ({item}) => {
    return(
      <View style = {styles.itemView}>
        {/* <Image/> */}
        <Text style = {styles.itemText}> {item.id} </Text>
        <Text style = {styles.itemText}> {item.title} </Text>
      </View>    
    ) 
  }

  handleLoadMore = () => {
    // this.setState({
    //   page : 0
    // })
    // console.warn('handle load more')
    this.setState({
      page : 1,
      isLoading : true
    },
    this.getData)
  }

  renderFooter = () => {
    return(
      <View style = {styles.loader}>
        <ActivityIndicator size = "large"/>
      </View>
    )
  }

  render(){
    return (
      <View style = {styles.container}>
        <FlatList
        data = {this.state.data}
        renderItem = {this.renderRow}
        onEndReached = {this.handleLoadMore}
        keyExtractor = {(item, index) => index.toString()}
        onEndThreshold = {0}
        // initialNumToRender = {1}
        // onEndThreshold = {this.renderRow}
        ListFooterComponent = {this.renderFooter}
        
        />
      </View>

      // <FlatList
      //     data={DATA}
      //     renderItem={({item}) =><View>
      //     <Text>{item.id}</Text>
      //     <Text>{item.title}</Text>
      //     </View>}
      //     keyExtractor={item => item.id}
      //   />
      // <SafeAreaView style={styles.container}>
        
      // </SafeAreaView>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 10,
  },
itemText : {
  fontSize : 16,
  paddingBottom : 20,
},
itemView : {
  borderBottomWidth : 1,
  marginBottom : 10

}
});
