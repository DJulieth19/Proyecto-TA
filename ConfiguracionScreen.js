// ConfiguracionScreen.js
import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

const ConfiguracionScreen = () => {
  return (
    <View style={styles.container}>
    <View style={styles.headerContainer}>
      <Image source={require('./assets/headerImage.png')} style={styles.headerImage} />
    </View>
    <Text style={styles.headerText}>User</Text>
    {/* Traer nombre de usuario */}
    <Image source={require('./assets/perfil.png')} style={styles.iconUser} />
   
    <View style={styles.buttonRow}>
      <TouchableOpacity style={styles.button}>
        <Image source={require('./assets/Admin/contrasena.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Contraseña</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={require('./assets/Admin/id_user.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Usuario</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.buttonRow}>
      <TouchableOpacity style={styles.button}>
        <Image source={require('./assets/user.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Icono</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={require('./assets/perfil.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Perfil</Text>
      </TouchableOpacity>
    </View>

  </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 0,
    alignItems: 'center',
  },
  headerText: {
    position: 'absolute',
    top: 100,
    left: 220,
    fontSize: 22,
    color: '#0973cb',
    fontWeight: 'bold',
  },
  iconUser: {
    width: 45,
    height: 45,
    position: 'absolute',
    top: 100,
    left: 290,
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
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
    height: 130,
  },
  buttonImage: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
  },

});

export default ConfiguracionScreen;
