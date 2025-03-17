import * as React from 'react';
import { } from 'react-native';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { Provider, useSelector, useDispatch } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

import Clients from '../screens/clients'
import ProfileClient from '../screens/profile'
import AddClient from '../screens/addclient'

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
    screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Clients" component={Clients} />
      <Stack.Screen name="ProfileClient" component={ProfileClient} />
      <Stack.Screen name="AddClient" component={AddClient} />
    </Stack.Navigator>
  );
}

