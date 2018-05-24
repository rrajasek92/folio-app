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
    //builds out percentage arrays for ideal and user portfolios as inputs for
    //generating transaction JSON
    let idealArr = folioArray(this.props.ideal_folio);
    let percentages = calculatePercentages(this.props.user_portfolio);
    let userArr = folioArray(percentages);
    let totalInv = total(this.props.user_portfolio);
    let trans = minimumTrans(idealArr, userArr, totalInv);
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
    //constructed transaction JSON used as datasource for transaction list 
    return (
      <FlatList
        data={this.state.transactions}
        renderItem={this._renderItem}
      />
    );
  }

}
