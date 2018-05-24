import {buildIdeal} from '../functions/recommendationEngine'

export const saveRisk = (payload) => {
  //receives number from 1 to 10
  console.log('saved RISK!');
  console.log(payload);
  //constructs data model for user selected risk level
  let folio = buildIdeal(payload);
  //constructs data model for donut component use
  let donut = donutData(folio);
  console.log(folio);
  return (dispatch) => {
    //dispatches ideal model and donut model state
    dispatch({type: 'risk_chosen', payload: folio});
    dispatch({type: 'update_donut', payload: donut})
  }
}

export const donutData = (payload) => {
  //constructs datasource for donut component as per required schema
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
  //saves user portfolio state
  console.log('saved FOLIO!');
  return (dispatch) => {
    dispatch({type: 'portfolio_submitted',payload: payload})
  }
}
