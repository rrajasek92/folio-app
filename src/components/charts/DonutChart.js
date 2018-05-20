import React from 'react';
import {View} from 'react-native';
import {VictoryPie, VictoryTooltip, VictoryLabel} from 'victory-native';
import {screenDimensions} from '../../config/Dimensions';
import {buildIdeal} from '../../functions/recommendationEngine';
import { connect } from 'react-redux';
var width = screenDimensions.width;

@connect(state =>({ideal_folio: state.ideal_portfolio.ideal_portfolio}))
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
    let out = this.state.data;
    let userFolio = this.props.ideal_folio;
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

  componentDidUpdate(){

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
      />
    );
  }
}
