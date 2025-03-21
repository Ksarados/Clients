import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './index'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer);
export const persistor = persistStore(store)

// const clearPersistedRedux = async () => {
//   await persistor.purge(); // Очищает локально сохранённые данные Redux
// };

// clearPersistedRedux()

// const clearAsyncStorage = async () => {
//   await AsyncStorage.clear();
//   console.log("AsyncStorage очищен!");
// };

// clearAsyncStorage()