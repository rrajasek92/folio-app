const INITIAL_STATE = {};
export default (portfolio = INITIAL_STATE, action) => {
  if(action.type === 'portfolio_submitted') {
    console.log('FOLIO REDUCER SUCCESSFUL');
    return {
      ...portfolio, user_portfolio: action.payload
    };
  }
  console.log('REDUCER FOLIO:');
  console.log(portfolio);
  return portfolio;
}
