const INITIAL_STATE = {risk_level: false};
export default (risk = INITIAL_STATE, action) => {
  if(action.type === 'risk_chosen') {
    console.log('RISK REDUCER SUCCESSFUL')
    return {
      ...risk, risk_level: action.payload
    };
  }
  console.log('REDUCER RISK:');
  console.log(risk);
  return risk;
}
