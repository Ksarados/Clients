// Saga которая принимает экшен

import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
// импортируем action fatchClients, clientFetched, clientFetchedError из clientReducer
import {
  fetchClients,
  clientFetched,
  clientFetchedError,
} from "../reducer/clientReducer";

function* fetchClientsSaga(action) {
  console.log("fetchClientsSaga", action);
  try {
    // в client вызываем Api c методом fetchClients и можем добавить параметры, например: action.payload.client(client = yield call(Api.fetchClients, action.payload.client);)
    const clients = [{ name: "Roma" }]; //yield call(Api.fetchClients); // в даном случаи у нас клиенты не передаются через Api и мы просто пердаем массив с объектами
    // в следующей строке мы вызываем функцию put(), которая обновляем наш массив клиентов
    yield put(clientFetched(clients)); // в него передаем ф-цию clientFetched из редьюсера и парадаем в ф-цию новых клиентов
  } catch (e) {
    // что бы приложение не падало мы передаем ф-цию, которая возвращает пустой массив
    yield put(clientFetchedError(e.message));
  }
}

function* mySaga() {
  // в yield takeEvery() мы можем передавать fatchClients или название например: 'CLIENT_REQUESTED'
  yield takeEvery(fetchClients, fetchClientsSaga);
}

// экспортируем Saga
export default mySaga;
