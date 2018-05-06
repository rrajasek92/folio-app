import React from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import DonutChart from '../components/charts/DonutChart';
import Transactions from '../components/charts/Transactions'

export default class Dashboard extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style = {{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{textAlign:'center', color:'grey',fontSize:21, paddingTop: 30}}>Your Ideal Portfolio</Text>
          <DonutChart />
        </View>
        <Transactions />
      </ScrollView>
    );
  }
}

Expo.registerRootComponent(Dashboard);
