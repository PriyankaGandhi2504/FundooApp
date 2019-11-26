import React, { Component } from 'react';
import {View, FlatList, StyleSheet, Text, Image, ActivityIndicator} from 'react-native';
// import userData from '../../UserServices'
// const UserData = new userData
const data = [
  {
    id: 1,
    title: 'First Item',
  },
  {
    id: 2,
    title: 'Second Item',
  },
  {
    id: 3,
    title: 'Third Item',
  },
  {
    id: 4,
    title: 'Third Item',
  },
  {
    id: 5,
    title: 'Third Item',
  },
  {
    id: 6,
    title: 'Third Item',
  },
  {
    id: 7,
    title: 'Third Item',
  },
  {
    id: 8,
    title: 'Third Item',
  },
  {
    id: 9,
    title: 'Third Item',
  },
  {
    id: 10,
    title: 'Third Item',
  }
];

// function Item({ title }) {
//   return (
//     <View style={styles.item}>
//       <Text style={styles.title}>{title}</Text>
//     </View>
//   );
// }


export default class FlatList1 extends Component {

  constructor(){
    super()
    this.state = {
      array : data,
      id : 1,
    //   page : 1,
      isLoading : false
    }
  }


//   componentDidMount(){
//   // console.log("await ");
  
//   var details = UserData.userData()
//   // console.log("received");
  
//   console.log("Details " + JSON.stringify(details));
//   this.setState({
//       data : details
//   })
//   console.log("Users Note " + this.state.usersNote);
//   // console.log("Component Did Mount");
  
// }


  getData = async ()=> {
    // const url = 'https://jsonplaceholder.typicode.com/photos?_limit=15&_page='+this.state.page
    // fetch(url).then((response) => response.json())
    // .then((responseJson) => {
    //   console.log( " Response Json " + JSON.stringify(responseJson));
    //   // var array = 
      this.setState({
        array : data,
        // data : JSON.stringify(responseJson),
        isLoading : false
      })
      console.log( " data " + JSON.stringify(data));
      

    // })
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
    console.warn('handle load more')
    this.setState({
      id : 1,
      isLoading : true
    },
    this.getData)
  }

//   renderFooter = () => {
//     return(
//       <View style = {styles.loader}>
//         <ActivityIndicator size = "large"/>
//       </View>
//     )
//   }

  render(){
    return (
      <View style = {styles.container}>
        <FlatList
        data = {this.state.array}
        renderItem = {this.renderRow}
        onEndReached = {this.handleLoadMore}
        keyExtractor = {(item, id) => id.toString()}
        // onEndThreshold = {this.renderRow}
        // ListFooterComponent = {this.renderFooter}
        
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

},
loader : {

}
});
