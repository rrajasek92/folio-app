import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import {saveRisk} from '../../actions';

@connect(state => ({saveRisk}))
export default class Node extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
  }

  onPress = () => {
    this.props.dispatch(this.props.saveRisk(this.props.val))
  }

  render() {
    return (
      <TouchableHighlight onPress={this.onPress}>
        <Text>{this.props.val}</Text>
      </TouchableHighlight>
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
