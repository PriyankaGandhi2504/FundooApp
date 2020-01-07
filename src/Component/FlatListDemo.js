import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image, ActivityIndicator } from 'react-native';
import userData from '../../UserServices'
const UserData = new userData
const dataArray = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    name: 'Priyanka'
  },
  {
    id: 4,
    title: 'Months',
    array: ['jan', 'feb']
  }
];

export default class FlatListDemo extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
      page: 1,
      isLoading: false
    }
  }

  componentDidMount = () => {
    this.getData()
  }

  getData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos?_limit=35&_page=' + this.state.page
    fetch(url).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: responseJson,
          isLoading: false
        }, this.getData)
      })
  }

  renderRow = ({ item }) => {
    return (
      <View style={styles.itemView}>
        <Text style={styles.itemText}> {item.id} </Text>
        <Text style={styles.itemText}> {item.title} </Text>
      </View>
    )
  }

  handleLoadMore = () => {
    this.setState({
      page: 1,
      isLoading: true
    }, this.getData)
  }

  renderFooter = () => {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          // initialNumToRender = {10}
          numColumns={1}
          renderItem={this.renderRow}
          onEndReached={this.handleLoadMore}
          keyExtractor={(item, index) => index.toString()}
          onEndThreshold={0}
          showsVerticalScrollIndicator={false}
          // ItemSeparatorComponent = {}
          // extraData = {this.renderRow}
          // initialNumToRender = {1}
          // onEndThreshold = {this.renderRow}
          ListFooterComponent={this.renderFooter}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  itemText: {
    fontSize: 16,
    paddingBottom: 20,
  },
  itemView: {
    borderBottomWidth: 1,
    marginBottom: 10
  }
});
