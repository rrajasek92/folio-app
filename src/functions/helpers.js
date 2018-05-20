import { NavigationActions } from 'react-navigation';

export const calculatePercentages = (folio) => {
  let total = 0;
  let output = {};
  for(i in folio){
    total += parseInt(folio[i]);
  }
  for(i in folio){
    output[i] = Math.round((folio[i]/total) * 100);
  }
  return output;
}


export const folioArray = (obj) => {
  let output = [];
  for(i in obj){
    output.push(obj[i]);
  }
  return output;
}

export const total = (folio) => {
  let total = 0;
  for(i in folio){
    let val = parseInt(folio[i]);
    total+=val;
  }
  return total;
}

export const cleanNavigate = (navigation, route) => {
  const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: route }),
    ],
  });
  navigation.dispatch(resetAction);
}
