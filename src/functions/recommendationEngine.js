import {insertionSort} from './helpers';

export const buildIdeal = (val) => {
  //takes in user provided risk value and returns a suggested portfolio model
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

export const minimumTrans = (ideal,input,total) => {
  //creates a JSON of transactions for use as datasource in transaction list component
  //index array has investment code at respective index within array
  let index = ['stocks','bonds','mutual', 'etf', 'estate'];
  //delta is a difference array between the input and ideal models
  let delta = input.map(function(item, index) {
    return parseFloat((item - ideal[index]).toFixed(4));
  });
  //use insertion sort to have lowest to highest differences
  let sortedDelta = insertionSort(delta, index);
  let transactions = actionCreator(sortedDelta.a, sortedDelta.b, total);
  return transactions;
}

function actionCreator(delta, index, total){
  //creates transaction JSON
  let actions =[]
  for(let i=0; i<delta.length; i++){
    let j=delta.length-1;
    while(delta[i] != 0){
      let item = {};
      //make sure you are taking money from investment valued both greater than
      //the destination investment and is not itself at a negative difference with
      //the ideal model. If 0, leave alone. If comparing with self, ignore
      if((delta[i]+delta[j]) >= delta[i] && delta[j] != 0 && index[i]!=index[j]){
        if(Math.abs(delta[i]) >= delta[j]){
          item['to']=index[i];
          item['from']=index[j];
          item['amount']=Math.round(parseFloat(((delta[j]/100)*total).toFixed(4)))
          console.log(item);
          actions.push(item);
          delta[i]+=delta[j];
          delta[j]=0;
        }else{
          item['to']=index[i];
          item['from']=index[j];
          item['amount']=Math.round(parseFloat(((delta[i]/100)*total).toFixed(4))) * -1;
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
