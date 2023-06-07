import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import HomeAdmin from './HomeAdmin';

import Menu from './Menu';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="HomeAdmin" component={HomeAdmin}  options={{ headerShown: false }}/>
        <Stack.Screen name="Menu" component={Menu}  options={{ headerShown: false }}/>
       
      </Stack.Navigator>
    </NavigationContainer>

  
  );
};


export default App;
