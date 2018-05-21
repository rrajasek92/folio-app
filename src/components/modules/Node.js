import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import {saveRisk} from '../../actions';
import { connect } from 'react-redux';

@connect(state => ({saveRisk}))
export default class Node extends React.Component {
  constructor(props){
    super(props);
    this.state={
      fontColor: ''
    }
  }

  componentWillMount() {
    console.log(this.props.color);
    this.getFont();
  }

  componentDidUpdate() {
    this.getFont();
  }

  getFont = () => {
    color=''
    if(this.props.color=='green'){
      color='white';
    }else color='green'
    this.setState({
      fontColor:color
    });
  }

  onPress = () => {
    this.props.dispatch(this.props.saveRisk(this.props.val));
    this.props.select(this.props.val);
  }

  render() {
    return (
      <TouchableHighlight onPress={this.onPress}>
        <Text style={{color:this.state.fontColor}}>{this.props.val}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10
  }
});
