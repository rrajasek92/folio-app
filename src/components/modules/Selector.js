import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Node from './Node';

export default class Selector extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: 1,
      data:[{val:1},{val:2},{val:3},{val:4},{val:5},{val:6},{val:7},{val:8},{val:9},{val:10}]
    }
  }

  changeSelected = (val) => {
    console.log('SELECTION CHANGED: ' + val);
    this.setState({
      selected: val
    });
  }

  _renderNode = (item) => {
    return (
      <Node
      val={item.val}
      select={this.changeSelected}
      selected={this.state.selected}
      />
    );
  }

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={({item}) => this._renderNode(item)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding:10
  }
});
