import React from 'react';
import SwitchSelector from 'react-native-switch-selector';
import Picker from 'react-native-wheel-picker';
import DonutChart from '../charts/DonutChart'
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-elements';
import { connect } from 'react-redux';
import {saveRisk} from '../../actions';

@connect(state => ({saveRisk}))
export default class RiskTolerance extends React.Component {

  componentWillMount(){
    this.props.dispatch(this.props.saveRisk(1));
  }

  submit = () => {
    this.props.navigation.navigate('PortfolioIntro');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center', color:'#29c64d',fontSize:30}}>What is your risk tolerance level?</Text>
        <SwitchSelector
          options={options}
          initial={0}
          fontSize={23}
          borderColor={'white'}
          hasPadding={false}
          onPress={value => {this.props.dispatch(this.props.saveRisk(value))}}
        />
        <DonutChart />
        <Button
          raised
          large
          title= 'Next'
          backgroundColor = '#3cad4f'
          onPress = {this.submit}
        />
      </View>
    );
  }
}

const options = [
{ label: '1', activeColor: '#287a3b', value: 1 },
{ label: '2', activeColor: '#29873f', value: 2 },
{ label: '3', activeColor: '#2b9644', value: 3 },
{ label: '4', activeColor: '#2bad49', value: 4 },
{ label: '5', activeColor: '#29b549', value: 5 },
{ label: '6', activeColor: '#29c64d', value: 6 },
{ label: '7', activeColor: '#23d14b', value: 7 },
{ label: '8', activeColor: '#15db43', value: 8 },
{ label: '9', activeColor: '#0fe040', value: 9 },
{ label: '10', activeColor: '#00f93a', value: 10 },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding:15
  }
});
