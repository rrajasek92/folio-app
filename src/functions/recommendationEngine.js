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
  let index=['stocks','bonds','mutual', 'etf', 'estate']
  let folio=input;
  let actions=[]
  for(let i=0; i<ideal.length-1; i++){
    let delta=ideal[i]-folio[i];
    for(let j=i+1;j<ideal.length;j++){
      let item={}
      if(delta<=folio[j]){
        item['to']=index[i];
        item['from']=index[j];
        item['amount']=Math.round((delta/100)*total);
        actions.push(item);
        folio[i]+=delta;
        folio[j]-=delta;
        break;
      }
    }
  }
  return actions;
}
