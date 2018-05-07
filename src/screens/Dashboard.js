import React from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import DonutChart from '../components/charts/DonutChart';
import {Button} from 'react-native-elements';
import Transactions from '../components/charts/Transactions'

export default class Dashboard extends React.Component {

  startOver = () => {
    this.props.navigation.navigate('RiskScreen');
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{alignItems: 'stretch'}}>
        <Text style={{textAlign:'center', color:'grey',fontSize:21, paddingTop: 30}}>Your Ideal Portfolio</Text>
        <View style={{alignSelf:'center'}}>
          <DonutChart />
        </View>
        <Text style={{textAlign:'center', color:'grey',fontSize:21, paddingBottom: 15}}>How to Match Your Ideal Portfolio</Text>
        <Transactions folio={this.props.navigation.state.params.folio}/>
        <TouchableOpacity activeOpacity={0.7} style={styles.startOver} onPress = {this.startOver}>
          <Text style={{color: 'white'}}>Start Over</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  startOver: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#b2b2b2',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding:10
  }
});

Expo.registerRootComponent(Dashboard);
