import React from 'react';
import {View} from 'react-native';
import {VictoryPie, VictoryTooltip, VictoryLabel} from 'victory-native';
import {screenDimensions} from '../../config/Dimensions';
import {buildIdeal} from '../../functions/recommendationEngine';
import { connect } from 'react-redux';
var width = screenDimensions.width;

@connect(state =>({donut_data: state.donut_reducer.donut_data}))
export default class DonutChart extends React.Component {

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
