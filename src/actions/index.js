import {buildIdeal} from '../functions/recommendationEngine'

export const saveRisk = (payload) => {
  console.log('saved RISK!');
  let folio = buildIdeal(payload);
  return (dispatch) => {
    dispatch({type: 'risk_chosen', payload: folio});
  }
}

export const savePortfolio = (payload) => {
  console.log('saved FOLIO!');
  return (dispatch) => {
    dispatch({type: 'portfolio_submitted',payload: payload})
  }
}
