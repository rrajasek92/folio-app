import {insertionSort} from './helpers';

export const buildIdeal = (val) => {
  let data = {}
  switch(val){
    case 1:
      data = {stocks: 10, bonds: 20, mutual: 15, etf: 25, estate: 30}
      break;
    case 2:
      data = {stocks: 15, bonds: 15, mutual: 20, etf: 25, estate: 25}
      break;
    case 3:
      data = {stocks: 15, bonds: 15, mutual: 25, etf: 25, estate: 20}
      break;
    case 4:
      data = {stocks: 15, bonds: 20, mutual: 25, etf: 20, estate: 20}
      break;
    case 5:
      data = {stocks: 20, bonds: 20, mutual: 20, etf: 20, estate: 20}
      break;
    case 6:
      data = {stocks: 25, bonds: 25, mutual: 20, etf: 15, estate: 15}
      break;
    case 7:
      data = {stocks: 30, bonds: 25, mutual: 15, etf: 15, estate: 15}
      break;
    case 8:
      data = {stocks: 30, bonds: 30, mutual: 15, etf: 10, estate: 15}
      break;
    case 9:
      data = {stocks: 35, bonds: 30, mutual: 15, etf: 5, estate: 15}
      break;
    case 10:
      data = {stocks: 40, bonds: 30, mutual: 10, etf: 5, estate: 15}
      break;
    default:
      data = "error"
  }
  return data;
}


export const neededTransactions = (risk, folio) => {
  let trans = [];
  for(key in folio){
    let obj = {}
    obj['key'] = key
    obj['value'] = risk[key] - folio[key]
    console.log(obj)
    trans.push(obj);
  }
  return trans;
}

export const minimumTrans = (ideal,input,total) => {
  let index = ['stocks','bonds','mutual', 'etf', 'estate'];
  let delta = input.map(function(item, index) {
    return Math.round(item - ideal[index]);
  });
  let sortedDelta = insertionSort(delta, index);
  let transactions = actionCreator(sortedDelta.a, sortedDelta.b, total);
  return transactions;
}

function actionCreator(delta, index, total){
  let actions =[]
  for(let i=0; i<delta.length; i++){
    let j=delta.length-1;
    while(delta[i] != 0){
      let item = {};
      if((delta[i]+delta[j]) >= delta[i] && delta[j] != 0){
        if(Math.abs(delta[i]) >= delta[j]){
          item['to']=index[i];
          item['from']=index[j];
          item['amount']=Math.round((delta[j]/100)*total);
          console.log(item);
          actions.push(item);
          delta[i]+=delta[j];
          delta[j]=0;
        }else{
          item['to']=index[i];
          item['from']=index[j];
          item['amount']=(Math.round((delta[i]/100)*total)) * -1;
          console.log(item);
          actions.push(item);
          delta[j]+=delta[i]
          delta[i]=0
        }
      }
      j--;
    }
  }
  return actions;
}
