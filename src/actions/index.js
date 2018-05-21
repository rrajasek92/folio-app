import {buildIdeal} from '../functions/recommendationEngine'
var selectorConfig = {
  1: {background: 'white', font: 'green'},
  2: {background: 'white', font: 'green'},
  3: {background: 'white', font: 'green'},
  4: {background: 'white', font: 'green'},
  5: {background: 'white', font: 'green'},
  6: {background: 'white', font: 'green'},
  7: {background: 'white', font: 'green'},
  8: {background: 'white', font: 'green'},
  9: {background: 'white', font: 'green'},
  10: {background: 'white', font: 'green'}
}

export const saveRisk = (payload) => {
  console.log('saved RISK!');
  console.log(payload);
  let folio = buildIdeal(payload);
  let donut = donutData(folio);
  console.log(folio);
  return (dispatch) => {
    dispatch({type: 'risk_chosen', payload: folio});
    dispatch({type: 'update_donut', payload: donut})
  }
}

export const donutData = (payload) => {
  let donutSchema = [
    { x: 'stocks', y: 0, label: "Stocks" },
    { x: 'bonds', y: 0, label: "Bonds" },
    { x: 'mutual', y: 0, label: "Mutual Funds" },
    { x: 'etf', y: 0, label: "ETF" },
    { x: 'estate', y: 0, label: "Real Estate" }

  ]
  let out = donutSchema;
  let userFolio = payload;
  for(i in out){
    out[i].y = userFolio[out[i].x]
  }
  return out;
}

export const savePortfolio = (payload) => {
  console.log('saved FOLIO!');
  return (dispatch) => {
    dispatch({type: 'portfolio_submitted',payload: payload})
  }
}
