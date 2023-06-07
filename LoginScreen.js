import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [showErrorImage, setShowErrorImage] = useState(false);


  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Contraseña:', password);


    const login = async () => {
      const url = 'http://165.22.189.59:8001/api/login';
      const credentials = {
        email: email,
        password: password,
      };

      try {
        const response = await axios.post(url, credentials);
        const { token, respuesta } = response.data;
        // Token y respuesta
        // en caso de credenciales válidas

        console.log('Token:', token);
        console.log('Respuesta:', respuesta);
        console.log('Código HTTP:', response.status);

        if (response.status === 202) {
          // Reiniciar la pila de navegación y eliminar la pantalla de inicio de sesión
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{ name: 'HomeAdmin' },],
            })
          );

        }
      } catch (error) {
        console.log('Mensaje de error:', error.response.data);
        console.log('Código HTTP:', error.response.status);
        if (error.response.status === 401) {
          setShowErrorImage(true);
          setTimeout(() => {
            setShowErrorImage(false);
          }, 3000);
        }

        if (error.response.status === 422) {
          setShowErrorImage(true);
          setTimeout(() => {
            setShowErrorImage(false);
          }, 3000);
        }
      }
    };
    login();
  };

  return (
    <ImageBackground source={require('./assets/fondo.png')} style={styles.backgroundImage}>
      <Image source={require('./assets/logo.png')} style={styles.Image} />
      {showErrorImage && (
        <Image
          source={require('./assets/warning5.png')}
          style={styles.errorImage}
        />
      )}
      <View style={styles.container}>
        <Text style={styles.title}>Ingresa</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <Text style={styles.forget}>Olvidé Contraseña</Text>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    position: 'absolute',
    top: 240,
    left: 60,
    backgroundColor: 'red',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  logo: {
    fontSize: 14,
    marginBottom: 10,
    color: 'white',
    marginLeft: 150,
    marginTop: 8,
    fontFamily: 'serif',
  },
  forget: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 18,
  },
  Image: {
    marginTop: 70,
    marginLeft: 135,
    width: 90,
    height: 90,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    marginTop: 110,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#0099CC',
    borderRadius: 15,
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#0099CC',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    border: 'blue',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorImage: {
    position: 'absolute',
    top: 60,
    left: 110,
    right: 0,
    bottom: 0,
    width: '55%',
    height: '55%',
    resizeMode: 'contain',
    zIndex: 999,
  },

});


export default LoginScreen;
