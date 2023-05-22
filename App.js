import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Importa tus componentes de las vistas adicionales
import ConfiguracionScreen from './ConfiguracionScreen';
import PerfilScreen from './PerfilScreen';
import InicioScreen from './InicioScreen';

const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>

      <Tab.Navigator
        screenOptions={{
          headerShown: false, // Oculta la barra de navegación en la parte superior
        }}
      >
        <Tab.Screen name="Perfil" component={PerfilScreen}
          options={{
            tabBarLabel: () => null, // Elimina el nombre de la pestaña
            tabBarIcon: () => (
              <Image source={require('./assets/perfil.png')} style={styles.Icons} />
            ),
          }
          }
        />
        <Tab.Screen name="Inicio" component={InicioScreen}
          options={{
            tabBarLabel: () => null, // Elimina el nombre de la pestaña
            tabBarIcon: () => (
              <Image source={require('./assets/home.png')} style={styles.Icons} />
            ),
          }
          }
        />
        <Tab.Screen name="Configuración" component={ConfiguracionScreen}
          options={{
            tabBarLabel: () => null, // Elimina el nombre de la pestaña
            tabBarIcon: () => (
              <Image source={require('./assets/config.png')} style={styles.Icons} />
            ),
          }
          }
        />

      </Tab.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  Icons: {
    width: 35,
    height: 35,
  },
});

export default App;
