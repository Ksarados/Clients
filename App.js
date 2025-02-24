import * as React from 'react';
import { } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Clients from './scr/screens/clients'
import ProfileClient from './scr/screens/profile'
import AddClient from './scr/screens/addclient'

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
    screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Clients" component={Clients} />
      <Stack.Screen name="ProfileClient" component={ProfileClient} />
      <Stack.Screen name="AddClient" component={AddClient} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
