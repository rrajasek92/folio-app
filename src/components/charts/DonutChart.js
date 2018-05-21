import React from 'react';
import {View} from 'react-native';
import {VictoryPie, VictoryTooltip, VictoryLabel} from 'victory-native';
import {screenDimensions} from '../../config/Dimensions';
import {buildIdeal} from '../../functions/recommendationEngine';
import { connect } from 'react-redux';
var width = screenDimensions.width;

@connect(state =>({donut_data: state.donut_reducer.donut_data}))
export default class DonutChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        { x: 'stocks', y: 100, label: "Stocks" },
        { x: 'bonds', y: 0, label: "Bonds" },
        { x: 'mutual', y: 0, label: "Mutual Funds" },
        { x: 'etf', y: 0, label: "ETF" },
        { x: 'estate', y: 0, label: "Real Estate" }

      ],
      newData: []
    }
  }

  componentWillMount(){
  }

  componentDidMount(){
  }

  componentDidUpdate(){

  }

  render() {

    return (
      <VictoryPie
        data={this.props.donut_data}
        animate={{duration: 1000}}
        colorScale="qualitative"
        labelRadius={75}
        style={{ labels: { fill: "white", fontSize: 10} }}
        innerRadius={40}
        width={width*2}
      />
    );
  }
}
