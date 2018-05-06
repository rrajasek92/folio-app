export const saveRisk = (payload) => {
  console.log('saved RISK!');
  return (dispatch) => {
    dispatch({type: 'risk_chosen',payload: payload});
  }
}

export const savePortfolio = (payload) => {
  console.log('saved FOLIO!');
  return (dispatch) => {
    dispatch({type: 'portfolio_submitted',payload: payload})
  }
}
