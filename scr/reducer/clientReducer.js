import { createSlice } from "@reduxjs/toolkit";
// import AddClient from "../screens/addclient";

const CLIENT_ADDED = "client/CLIENT_ADDED";

const initialValue = [];

const clientSlice = createSlice({
  name: "clienta",
  initialState: initialValue,
  reducers: {
    addClient: (client, action) => {
      return [...client, action.payload];
    },
  },
});

export const { addClient } = clientSlice.actions;

export default clientSlice.reducer;

// const reducer = (state = initialValue, action) => {

//   switch(action.type){
//     case CLIENT_ADDED:
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// export default reducer;

// export const addClientAction = (client) => {
//   return {type: CLIENT_ADDED, payload: client}
// }
