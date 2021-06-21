import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Screen from './pantallas/SolicitudesProductoServicio';

const Stack = createStackNavigator();

const myApp = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name = "Home" component = {Screen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default myApp
