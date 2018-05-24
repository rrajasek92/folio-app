import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
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
      //initialize user portfolio object
      folio: {stocks: '', bonds: '', mutual: '', etf: '', estate: ''},
      //datasource for user entry list
      investments: [
        {type:'Stocks', key:'stocks'},
        {type:'Bonds', key:'bonds'},
        {type:'Mutual Funds', key:'mutual'},
        {type:'ETF', key:'etf'},
        {type:'Real Estate', key:'estate'}
      ],
    };
  }

  handleInput = (type, value) =>{
    //updates local portfolio object with each user keystroke
    let temp = this.state.folio;
    temp[type] = value;
    this.setState({folio: temp});
  }

  dataCheck = (folio) =>{
    //Type proof, will check to see if entries are number values and not strings/letters etc.
    for(i in folio){
      let int = parseInt(folio[i])||'null'
      if(int=='null'){
        alert('Please enter valid dollar values for each investment type');
        return false;
      }
    }
    return true;
  }

  submit = () => {
    console.log('SUBMITTING FORM')
    let check = this.dataCheck(this.state.folio);
    if(check){
    //save user portfolio in redux
    this.props.dispatch(this.props.savePortfolio(this.state.folio));
    this.props.navigation.navigate('Dashboard');
    }
  }

  _renderItem = (item) => {
    //render individual form entries
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
        <View style={{padding: 10}}>
          <Text style={{textAlign: 'center', color:'#29c64d',fontSize:30}}>Your Portfolio</Text>
        </View>
        <View style={{flex:1, padding: 15}}>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 15
  }
});
