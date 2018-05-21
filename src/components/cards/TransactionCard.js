import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements'

export default class TransactionCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      to: '',
      from:''
    }
  }

  componentWillMount() {
    let to_switch = this.typeSwitch(this.props.to);
    let from_switch = this.typeSwitch(this.props.from);
    this.setState({
      to: to_switch,
      from: from_switch
    });
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
        <Text style={{fontSize:10}}>{this.state.from}</Text>
        <Icon
          name='arrow-bold-right'
          type='entypo'
          color='#ef7c7c'
        />
        <Text style={{color: '#62c16d', fontSize:20}}>${this.props.amount}</Text>
        <Icon
          name='arrow-bold-right'
          type='entypo'
          color='#62c16d'
        />
        <Text style={{fontSize:10}}>{this.state.to}</Text>
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
