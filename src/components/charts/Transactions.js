import React from 'react';
import {FlatList} from 'react-native';
import { connect } from 'react-redux';
import {buildIdeal, neededTransactions} from '../../functions/recommendationEngine';
import TransactionCard from '../cards/TransactionCard';

@connect(state => ({risk_level: state.risk_level.risk_level, user_portfolio: state.user_portfolio.user_portfolio}))
export default class Transactions extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      transactions: []
    }
  }

  componentWillMount(){
    let ideal = buildIdeal(this.props.risk_level);
    let trans = neededTransactions(ideal, this.props.user_portfolio);
    this.setState({transactions:trans});
  }

  componentDidMount(){
  }

  _renderItem = ({item}) => {
    return (
      <TransactionCard
        type={this.item.type}
        transaction={this.item.transaction}
      />
    )
  }

  render() {
    console.log("TRANSACTIONS");
    console.log(this.state.transactions);
    return (
      <FlatList
        data={this.state.transactions}
        renderItem={this._renderItem}
      />
    );
  }

}
