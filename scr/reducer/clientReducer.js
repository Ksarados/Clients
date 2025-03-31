import { createSlice, createAction } from "@reduxjs/toolkit";
// Код для reducer для Redux.
const CLIENT_ADDED = "client/CLIENT_ADDED"; // Экшен, скорей всего тоже самое, что и action.type(экшенТайпы).

// Первоначальное значение Redux, которое передается в функцию reducer() ниже.
const initialState = []; // создается начальное состояние

export const fetchClient = createAction("client/FETCH_CLIENT");

const clientsSLice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    addClientAction: (state, action) => {
      return [...state, action.payload];
    },
    clientFetched: (_state, action) => {
      console.log("clientFetched", action);
      return action.payload;
    },
    clientFetchedError: (_state, action) => {
      console.log("fetch client error", action.payload);
      return [];
    },
  },
});

export const { addClientAction, clientFetched, clientFetchedError } =
  clientsSLice.actions;
export default clientsSLice.reducer;
