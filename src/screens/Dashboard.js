import React from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import DonutChart from '../components/charts/DonutChart';
import Transactions from '../components/charts/Transactions'
const sampleData = {stocks: 3, bonds: 7, mutual: 11, etf: 15, estate: 20, hedge: 21, equity: 23}

export default class Dashboard extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style = {{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{textAlign:'center', color:'grey',fontSize:21, paddingTop: 30}}>Your Ideal Portfolio</Text>
          <DonutChart folio={sampleData}/>
        </View>
        <Transactions />
      </ScrollView>
    );
  }
}

Expo.registerRootComponent(Dashboard);
