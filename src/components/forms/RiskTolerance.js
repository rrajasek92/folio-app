import React from 'react';
import SwitchSelector from 'react-native-switch-selector';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Button} from 'react-native-elements';
import { connect } from 'react-redux';
import {saveRisk} from '../../actions'
import {cleanNavigate} from '../../functions/helpers';

@connect(state => ({risk_level: state.risk_level.risk_level, user_portfolio: state.user_portfolio.user_portfolio}, {saveRisk}))
export default class RiskTolerance extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      risk: 'I want minimum volatility',
      riskVal: 1
    };
  }

  setMessage = (value) => {
    if(value == 1){
      this.setState({risk:'I want minimum volatility'});
    }
    else if(value == 10){
      this.setState({risk:'I want maximum volatility'});
    }
    else if(value <= 4){
      this.setState({risk:'I want to avoid volatility'});
    }
    else if(value <= 7){
      this.setState({risk:'I don\'t mind a little volatility'});
    }
    else{
      this.setState({risk:'I want more volatility'});
    }
  }

  submit = () => {
    this.props.saveRisk(this.state.riskVal);
    this.props.navigation.navigate('PortfolioIntro');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center', color:'#29c64d',fontSize:30}}>What is your risk tolerance level?</Text>
        <SwitchSelector
          options={options}
          initial={0}
          fontSize={25}
          borderColor={'white'}
          hasPadding={false}
          onPress={value => {
            this.setState({riskVal: value});
            this.setMessage(value);
          }}
        />
        <Text style={{color:'#29c64d',fontSize:24}}>{this.state.risk}</Text>
        <Button
          raised
          large
          title= 'Submit'
          backgroundColor = '#3cad4f'
          onPress = {this.submit}
        />
      </View>
    );
  }
}

const options = [
{ label: '1', activeColor: '#287a3b', value: '1' },
{ label: '2', activeColor: '#29873f', value: '2' },
{ label: '3', activeColor: '#2b9644', value: '3' },
{ label: '4', activeColor: '#2bad49', value: '4' },
{ label: '5', activeColor: '#29b549', value: '5' },
{ label: '6', activeColor: '#29c64d', value: '6' },
{ label: '7', activeColor: '#23d14b', value: '7' },
{ label: '8', activeColor: '#15db43', value: '8' },
{ label: '9', activeColor: '#0fe040', value: '9' },
{ label: '10', activeColor: '#00f93a', value: '10' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding:15,
    // backgroundColor: '#55b56b'
  }
});
