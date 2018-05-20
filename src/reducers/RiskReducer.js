const INITIAL_STATE = {};
export default (risk = INITIAL_STATE, action) => {
  if(action.type === 'risk_chosen') {
    console.log('RISK REDUCER SUCCESSFUL')
    return {
      ...risk, ideal_portfolio: action.payload
    };
  }
  console.log('REDUCER RISK:');
  console.log(risk);
  return risk;
}
