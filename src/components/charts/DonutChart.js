import React from 'react';
import {View} from 'react-native';
import {VictoryPie, VictoryTooltip, VictoryLabel} from 'victory-native';
import {screenDimensions} from '../../config/Dimensions';
import {buildIdeal} from '../../functions/recommendationEngine';
import { connect } from 'react-redux';
var width = screenDimensions.width;

@connect(state =>({risk_level: state.risk_level.risk_level}))
export default class DonutChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        { x: 'stocks', y: 100, label: "Stocks" },
        { x: 'bonds', y: 0, label: "Bonds" },
        { x: 'mutual', y: 0, label: "Mutual Funds" },
        { x: 'etf', y: 0, label: "ETF" },
        { x: 'estate', y: 0, label: "Real Estate" },
        { x: 'hedge', y: 0, label: "Hedge Funds" },
        { x: 'equity', y: 0, label: "Private Equity" },

      ],
      newData: []
    }
  }

  componentWillMount(){
    let out = this.state.data;
    let userFolio = buildIdeal(this.props.risk_level)
    for(i in out){
      out[i].y = userFolio[out[i].x]
    }
    this.setState({
      newData: out
    });


  }

  componentDidMount(){
    let dataNew = this.state.newData;
    this.setState({
      data: dataNew
    })
  }

  render() {

    return (
      <VictoryPie
        data={this.state.data}
        animate={{duration: 5000}}
        colorScale="qualitative"
        labelRadius={75}
        style={{ labels: { fill: "white", fontSize: 10} }}
        innerRadius={40}
        width={width*2}
        // labelComponent={<CustomLabel />}
      />
    );
  }
}

export class CustomLabel extends React.Component {
  static defaultEvents = VictoryTooltip.defaultEvents

  render() {
    const { datum, text, y, style } = this.props
    return (
        <VictoryTooltip
          {...this.props}
          text={`${text}\n${datum.y}%`}
          orientation="top"
          pointerLength={5}
          height={40}
        />
    )
  }
}
