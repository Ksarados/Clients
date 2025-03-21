const CLIENT_ADDED = 'client/CLIENT_ADDED'

const initialValue = [];

const reducer = (state = initialValue, action) => {

  switch(action.type){
    case CLIENT_ADDED:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;

export const addClientAction = (client) => {
  return {type: CLIENT_ADDED, payload: client}
}
