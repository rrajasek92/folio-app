import React from 'react';
import PieChart from 'react-native-pie-chart';
import { StyleSheet, Text, View } from 'react-native';

export default class DonutChart extends React.Component {
  constructor(props){
    super();
  }

  componentWillMount(){
  }

  render() {
    const chart_wh = 250
    const series = [123, 321, 123, 789, 537]
    const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800']

    return (
      <PieChart
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#FFF'}
      />
    );
  }
}

const styles = StyleSheet.create({

});
