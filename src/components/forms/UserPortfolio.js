import React from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'
import {Button} from 'react-native-elements';
import {calculatePercentages} from '../../functions/helpers';
import { connect } from 'react-redux';
import {savePortfolio} from '../../actions'

@connect(state => ({savePortfolio}))
export default class UserPortfolio extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      folio: {bonds:'', equity:'', estate:'', etf:'', hedge:'', mutual:'', stocks:''},
      investments: [
        {type:'Stocks', key:'stocks'},
        {type:'Bonds', key:'bonds'},
        {type:'Mutual Funds', key:'mutual'},
        {type:'ETF', key:'etf'},
        {type:'Real Estate', key:'estate'},
        {type:'Hedge Funds', key:'hedge'},
        {type:'Private Equity', key:'equity'}
      ],
    };
  }

  handleInput = (type, value) =>{
    let temp = this.state.folio;
    temp[type] = value;
    this.setState({folio: temp});
  }

  submit = () => {
    let check = this.state.folio;
    for(i in check){
      let int = parseInt(check[i])||'null'
      if(int=='null'){
        alert('Please enter valid dollar values for each investment type');
        return;
      }
    }
    console.log(this.state.folio);
    let user_folio = calculatePercentages(this.state.folio);
    // this.props.dispatch(this.props.savePortfolio(user_folio));
    console.log(user_folio);
    this.props.navigation.navigate('Dashboard', {folio: user_folio});
  }

  _renderItem = (item) => {
    return (
      <View>
        <FormLabel>{item.type}</FormLabel>
        <FormInput containerStyle={{width: '90%'}} onChangeText={(text) => this.handleInput(item.key,text)}/>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
          <FlatList
            data={this.state.investments}
            renderItem={({item}) => this._renderItem(item)}
          />
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
  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <FormLabel>Stocks</FormLabel>
  //       <FormInput onChangeText={(text) => this.handleInput('stocks',text)}/>
  //       <FormLabel>Bonds</FormLabel>
  //       <FormInput onChangeText={(text) => this.handleInput('bonds',text)}/>
  //       <FormLabel>Mutual Funds</FormLabel>
  //       <FormInput onChangeText={(text) => this.handleInput('mutual',text)}/>
  //       <FormLabel>ETF</FormLabel>
  //       <FormInput onChangeText={(text) => this.handleInput('etf',text)}/>
  //       <FormLabel>Real Estate</FormLabel>
  //       <FormInput onChangeText={(text) => this.handleInput('estate',text)}/>
  //       <FormLabel>Hedge Funds</FormLabel>
  //       <FormInput onChangeText={(text) => this.handleInput('hedge',text)}/>
  //       <FormLabel>Private Equity</FormLabel>
  //       <FormInput onChangeText={(text) => this.handleInput('equity',text)}/>
  //     </View>
  //   );
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    // alignSelf: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  }
});
