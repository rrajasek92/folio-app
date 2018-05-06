import { NavigationActions } from 'react-navigation';

export const calculatePercentages = (folio) => {
  let total = 0;
  let output = {};
  for(i in folio){
    total += folio[i];
  }
  for(i in folio){
    output[i] = folio[i]/total;
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
