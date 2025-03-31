// Создаем Store( хранилище )
import { createStore, applyMiddleware } from "redux"; // импорт Store( хранилища ) из библиотеки redux
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage"; // добовляем для указания варианта сохранения
import createSagaMiddleware from "redux-saga";

// Если надо использовать несколько Reducer
import rootReducer from "./index"; // Импортировали rootReducer( combineReducers )

// Импортируем сагу
import mySaga from "../saga/clientSaga";

// вариант сохранения данных для мобильных телефонов
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);
export const persistor = persistStore(store);

sagaMiddleware.run(mySaga);
