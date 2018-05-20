import React from 'react';
import {FlatList} from 'react-native';
import { connect } from 'react-redux';
import {buildIdeal, minimumTrans} from '../../functions/recommendationEngine';
import {folioArray, total, calculatePercentages} from '../../functions/helpers';
import TransactionCard from '../cards/TransactionCard';

@connect(state => ({ideal_folio: state.ideal_portfolio.ideal_portfolio, user_portfolio: state.user_portfolio.user_portfolio}))
export default class Transactions extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      transactions: []
    }
  }

  componentWillMount(){
    let idealArr = folioArray(this.props.ideal_folio);
    let percentages = calculatePercentages(this.props.user_portfolio);
    console.log('Percentages:');
    console.log(percentages);
    let userArr = folioArray(percentages);
    let totalInv = total(this.props.user_portfolio);
    console.log(totalInv);
    let trans = minimumTrans(idealArr, userArr, totalInv);
    console.log(trans);
    this.setState({transactions:trans});
  }

  _renderItem = ({item}) => {
    return (
      <TransactionCard
        to={item.to}
        from={item.from}
        amount={item.amount}
      />
    )
  }

  render() {
    return (
      <FlatList
        data={this.state.transactions}
        renderItem={this._renderItem}
      />
    );
  }

}
