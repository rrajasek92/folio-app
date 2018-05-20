import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class TransactionCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fontColor:'black',
      to: '',
      from:''
    }
  }

  componentWillMount() {
    let color = this.getColor(this.props.amount);
    let to_switch = this.typeSwitch(this.props.to);
    let from_switch = this.typeSwitch(this.props.from);
    this.setState({
      fontColor:color,
      to: to_switch,
      from: from_switch
    });
  }

  getColor = (delta) => {
    if(delta<0) return '#ef7c7c';
    if(delta>0) return '#62c16d';
  }

  typeSwitch = (code) => {
    let type = ''
    switch(code){
      case 'stocks':
        type = 'Stocks'
        break;
      case 'bonds':
        type = 'Bonds'
        break;
      case 'mutual':
        type = 'Mutual Funds'
        break;
      case 'etf':
        type = 'ETF'
        break;
      case 'estate':
        type = 'Real Estate'
        break;
      default:
        break;
    }
    return type;
  }

  render() {
    return (
      <TouchableOpacity activeOpacity = {0.7} style={styles.container}>
        <Text style={{fontSize:15}}>{this.state.from}    -> </Text>
        <Text style={{color: this.state.fontColor, fontSize:20}}>${this.props.amount}</Text>
        <Text style={{fontSize:15}}> ->    {this.state.to}</Text>
      </TouchableOpacity>
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
