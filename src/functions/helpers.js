import { NavigationActions } from 'react-navigation';

export const calculatePercentages = (folio) => {
  //generate percentage object based on user portfolio
  let total = 0;
  let output = {};
  for(i in folio){
    total += parseFloat(parseFloat(folio[i]).toFixed(4));
  }
  for(i in folio){
    output[i] = parseFloat(((folio[i]/total) * 100).toFixed(4));
  }
  return output;
}


export const folioArray = (obj) => {
  //converts portfolio object into array
  let output = [];
  for(i in obj){
    output.push(obj[i]);
  }
  return output;
}

export const total = (folio) => {
  //finds the investment total for the user
  let total = 0;
  for(i in folio){
    let val = parseFloat(parseFloat(folio[i]).toFixed(4));
    total+=val;
  }
  return total;
}

export const insertionSort = (items, index) => {
  for (var i = 0; i < items.length; i++) {
    let value = items[i]
    let value2 = index[i]
    for (var j = i - 1; j > -1 && items[j] > value; j--) {
      items[j + 1] = items[j]
      index[j + 1] = index[j]
    }
    items[j + 1] = value
    index[j + 1] = value2
  }

  output = {};
  output['a']=items;
  output['b']=index;
  return output;
}

export const cleanNavigate = (navigation, route) => {
  //Excluded due to numerous bugs
  const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: route }),
    ],
  });
  navigation.dispatch(resetAction);
}
