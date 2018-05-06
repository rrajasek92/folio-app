import React from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'
import {Button} from 'react-native-elements';
import {calculatePercentages} from '../../functions/helpers';
import { connect } from 'react-redux';
import {savePortfolio} from '../../actions'

@connect(state => ({risk_level: state.risk_level.risk_level, user_portfolio: state.user_portfolio.user_portfolio}, {savePortfolio}))
export default class UserPortfolio extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      folio: {}
    };
  }

  handleInput = (type, value) =>{
    let temp = this.state.folio;
    temp[type] = value;
    this.setState({folio: temp});
  }

  submit = () => {
    console.log(this.state.folio);
    let user_folio = calculatePercentages(this.state.folio);
    this.props.savePortfolio(user_folio);
    this.props.navigation.navigate('Dashboard');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{padding:5}}>
          <FormLabel>Stocks</FormLabel>
          <FormInput onChangeText={(text) => this.handleInput('stocks',text)}/>
          <FormLabel>Bonds</FormLabel>
          <FormInput onChangeText={(text) => this.handleInput('bonds',text)}/>
          <FormLabel>Mutual Funds</FormLabel>
          <FormInput onChangeText={(text) => this.handleInput('mutual',text)}/>
          <FormLabel>ETF</FormLabel>
          <FormInput onChangeText={(text) => this.handleInput('etf',text)}/>
          <FormLabel>Real Estate</FormLabel>
          <FormInput onChangeText={(text) => this.handleInput('estate',text)}/>
          <FormLabel>Hedge Funds</FormLabel>
          <FormInput onChangeText={(text) => this.handleInput('hedge',text)}/>
          <FormLabel>Private Equity</FormLabel>
          <FormInput onChangeText={(text) => this.handleInput('equity',text)}/>
        </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
