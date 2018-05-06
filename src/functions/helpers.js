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
