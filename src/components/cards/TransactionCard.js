import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class TransactionCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fontColor:'black',
      type: ''
    }
  }

  componentWillMount() {
    let color = this.getColor(this.props.transPct);
    let tranType = this.typeSwitch(this.props.type);
    this.setState({
      fontColor:color,
      type: tranType
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
      case 'hedge':
        type = 'Hedge Funds'
        break;
      case 'equity':
        type = 'Private Equity'
        break;
      default:
        break;
    }
    return type;
  }

  render() {
    return (
      <TouchableOpacity activeOpacity = {0.7} style={styles.container}>
        <Text style={{fontSize:10}}>Your {this.state.type}: {this.props.folioPct}%</Text>
        <Text style={{color: this.state.fontColor, fontSize:10}}>{this.props.transPct}% change needed</Text>
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
