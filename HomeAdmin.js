import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ConfiguracionScreen from './ConfiguracionScreen';
import PerfilScreen from './PerfilScreen';
import InicioScreen from './InicioScreen';

const Tab = createBottomTabNavigator();
const HomeAdmin = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            focused ? (
              <Image source={require('./assets/perfil.png')} style={styles.Icons} />
            ) : (
              <Image source={require('./assets/perfil.png')} style={styles.IconsInactive} />
            )
          ),
        }}
      />
      <Tab.Screen
        name="Inicio"
        component={InicioScreen}
       options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            focused ? (
              <Image source={require('./assets/home.png')} style={styles.Icons} />
            ) : (
              <Image source={require('./assets/home.png')} style={styles.IconsInactive} />
            )
          ),
        }}
      />
      <Tab.Screen
        name="Configuración"
        component={ConfiguracionScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            focused ? (
              <Image source={require('./assets/config.png')} style={styles.Icons} />
            ) : (
              <Image source={require('./assets/config.png')} style={styles.IconsInactive} />
            )
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  Icons: {
    width: 35,
    height: 35,
  },
  IconsInactive: {
    width: 25,
    height: 25,
  },
});

export default HomeAdmin;
