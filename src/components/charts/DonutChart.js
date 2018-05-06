import React from 'react';
import {View, Dimensions} from 'react-native';
import {VictoryPie, VictoryTooltip, VictoryLabel} from 'victory-native';
var {height, width} = Dimensions.get('window');

export default class DonutChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        { x: 1, y: 100, label: "Stocks" },
        { x: 2, y: 0, label: "Bonds" },
        { x: 3, y: 0, label: "Mutual Funds" },
        { x: 3, y: 0, label: "ETF" },
        { x: 3, y: 0, label: "Real Estate" },
        { x: 3, y: 0, label: "Hedge Funds" },
        { x: 3, y: 0, label: "Private Equity" },

      ]
    }
  }

  componentDidMount(){
    this.setState({
      data: [
        { y: 3, label: "Stocks" },
        { y: 7, label: "Bonds" },
        { y: 11, label: "Mutual Funds" },
        { y: 20, label: "ETF" },
        { y: 15, label: "Real Estate" },
        { y: 21, label: "Hedge Funds" },
        { y: 23, label: "Private Equity" },

      ]
    })
  }

  render() {

    return (
      <VictoryPie
        data={this.state.data}
        animate={{duration: 2000}}
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
