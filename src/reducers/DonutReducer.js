const INITIAL_STATE = {};
export default (donut = INITIAL_STATE, action) => {
  if(action.type === 'update_donut') {
    console.log('RISK REDUCER SUCCESSFUL')
    return {
      ...donut, donut_data: action.payload
    };
  }
  console.log('DONUT RISK:');
  console.log(donut);
  return donut;
}
