// Импортируем все саги, которые передавали
import { all } from "redux-saga/effects";
// Импортируем все остальные саги
import clientSaga from "./clientSaga";

// В функцию генератор передаем наши саги
export default function* rootSaga() {
  // Здесь передаем все саги, которы у нас есть
  yield all([clientSaga()]);
}
