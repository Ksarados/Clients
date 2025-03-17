import { combineReducers } from 'redux';

import clientReducer from './clientReducer';
// import profileReduser from './profileReducer';

const rootReducer = combineReducers({
  clients: clientReducer,
//   profile: profileReduser
});

export default rootReducer;