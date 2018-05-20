import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
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
      folio: {stocks: '', bonds: '', mutual: '', etf: '', estate: ''},
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
    this.props.dispatch(this.props.savePortfolio(this.state.folio));
    this.props.navigation.navigate('Dashboard');
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
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  }
});
