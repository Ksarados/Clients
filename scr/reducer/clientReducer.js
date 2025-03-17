const CLIENT_ADDED = 'client/CLIENT_ADDED'

const initialValue = [{name: 'Andrey'}];

const clientReducer = (state = initialValue, action) => {

  switch(action.type){
    case CLIENT_ADDED:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default clientReducer;

export const addClientAction = (client) => {
  return {type: CLIENT_ADDED, payload: client}
}
