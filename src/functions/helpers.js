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

export const cleanNavigate = (navigation, route) => {
  const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: route }),
    ],
  });
  navigation.dispatch(resetAction);
}
