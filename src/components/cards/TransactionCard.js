import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class TransactionCard extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Text>{this.props.type}</Text>
        <Text>{this.props.transaction}% change needed</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding:10
  }
});
