export const recommend = (val) => {
  let data = {}
  switch(val){
    case 1:
      data = {stocks: 3, bonds: 7, mutual: 11, etf: 15, estate: 20, hedge: 21, equity: 23}
      break;
    case 2:
      data = {stocks: 3, bonds: 7, mutual: 11, etf: 20, estate: 15, hedge: 21, equity: 23}
      break;
    case 3:
      data = {stocks: 3, bonds: 7, mutual: 11, etf: 21, estate: 20, hedge: 15, equity: 23}
      break;
    case 4:
      data = {stocks: 3, bonds: 7, mutual: 11, etf: 21, estate: 23, hedge: 15, equity: 20}
      break;
    case 5:
      data = {stocks: 7, bonds: 3, mutual: 15, etf: 23, estate: 21, hedge: 11, equity: 20}
      break;
    case 6:
      data = {stocks: 7, bonds: 11, mutual: 21, etf: 23, estate: 20, hedge: 3, equity: 15}
      break;
    case 7:
      data = {stocks: 7, bonds: 15, mutual: 23, etf: 21, estate: 11, hedge: 3, equity: 20}
      break;
    case 8:
      data = {stocks: 11, bonds: 15, mutual: 21, etf: 23, estate: 20, hedge: 3, equity: 7}
      break;
    case 9:
      data = {stocks: 15, bonds: 23, mutual: 21, etf: 20, estate: 11, hedge: 3, equity: 7}
      break;
    case 10:
      data = {stocks: 23, bonds: 20, mutual: 21, etf: 15, estate: 11, hedge: 7, equity: 3}
      break;
    default:
      data = "error"
  }
  return data;
}

export const transaction = (risk, folio) =>{
  let trans = {};
  for(key in folio){
    trans[key] = risk[key] - folio[key]
  }
  return trans;
}
