import  React from 'react';
import { } from 'react-native';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './scr/reducer/store';
import AppNavigator from './scr/navigation';

// splashScreen.preventAutoHideAsync();
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator/>
      </PersistGate>
    </Provider>
  );
}