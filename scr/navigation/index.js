import * as React from 'react';
import { } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Provider, useSelector, useDispatch } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

import MainStack from './MainStack';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
