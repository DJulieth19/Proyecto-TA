// PerfilScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

//Traigo cantidad TOTAL de ventas y de empleados
const ventasRealizadas = 70;
const numeroEmpleados = 5;
const cantidadDinero = " 1'500.000";


const PerfilScreen = () => {
  const nombreUsuario = 'Daniel Martinez';
  const tipoUsuario = 'Administrador';
  const navigation = useNavigation();

  const handleLogout = () => {
    // Aquí puedes realizar las acciones necesarias para cerrar sesión, como limpiar el estado o eliminar el token de autenticación.
    // También puedes redirigir al usuario a la pantalla de inicio de sesión.

    // Por ejemplo, puedes utilizar el método navigate() para redirigir al usuario a la pantalla de inicio de sesión:
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('./assets/headerImage.png')} style={styles.headerImage} />
      </View>
      <Text style={styles.headerText}>User</Text>
      {/* Traer nombre de usuario */}
      <Image source={require('./assets/perfil.png')} style={styles.iconUser} />
      <Text style={styles.label1}>Nombre de usuario:</Text>
      <Text style={styles.value}>{nombreUsuario}</Text>
      <View style={styles.separator} />
      <Text style={styles.label2}>Tipo de usuario:</Text>
      <Text style={styles.value}>{tipoUsuario}</Text>

      <View style={styles.separator} />
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoValue}>{ventasRealizadas}</Text>
          <Text style={styles.infoLabel}>Ventas Realizadas</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoValue}>{numeroEmpleados}</Text>
          <Text style={styles.infoLabel}>Empleados</Text>
        </View>
      </View>
      <View style={styles.separator} />
      <View style={styles.buttonRow}>
        <Icon name="dollar" size={25} color="green" />
        <Text style={styles.infoValue2}>{cantidadDinero}</Text>
      </View>
      <Text style={styles.infoLabel}>Ingresos registrados</Text>
      <View style={styles.separator} />
       {/* Agrega el botón o enlace para cerrar sesión */}
       <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    marginTop: 20,
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  label1: {
    marginTop:200,
    fontSize: 16,
    fontWeight: 'bold',
  },
  label2: {
    marginTop:20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    alignItems: 'center',
  },
  headerText: {
    position: 'absolute',
    top: 85,
    left: 235,
    marginTop: 0,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  iconUser: {
    position: 'absolute',
    top: 120,
    left: 210,
    width: 100,
    height: 100,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: 380,
    height: 170,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 20,
  },

  separator: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#0973cb',
    width: '100%',
  },
  infoContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  infoItem: {
    marginEnd: 20,
    alignItems: 'center',
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoValue2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  infoLabel: {
    fontSize: 18,
    color: 'gray',
  },
});

export default PerfilScreen;
