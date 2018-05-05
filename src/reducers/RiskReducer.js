const INITIAL_STATE = false;
export default (risk = INITIAL_STATE, action) => {
  if(action.type === 'risk_chosen') {
    return {
      ...risk, risk_level: action.payload
    };
  }
  return risk;
}
