// InicioScreen.js

import { View, StyleSheet, Image, TouchableOpacity, Text, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

const Menu = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const handleGoBack = () => {
    navigation.goBack();
  };
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('./assets/headerImage.png')} style={styles.headerImage} />
        <Text style={styles.headerText}>User</Text>
        {/* Traer nombre de usuario */}
        <Image source={require('./assets/perfil.png')} style={styles.iconUser} />
      </View>
      <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
        <Image source={require('./assets/Admin/return.png')} style={styles.goBackButtonImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.IconPlus} onPress={handleGoBack}>
        <Image source={require('./assets/Admin/mas.png')} style={styles.IconPlus} />
      </TouchableOpacity>

      <View style={styles.containerButtons}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={openModal} >
            <Image source={require('./assets/menu/hamburguesa.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Hamburguesa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={openModal}>
            <Image source={require('./assets/menu/hot_dog.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Perro Caliente</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={openModal}>
            <Image source={require('./assets/menu/pizza.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Pizza</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={openModal}>
            <Image source={require('./assets/menu/tacos.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Taco</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={openModal}>
            <Image source={require('./assets/menu/emparedado.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Emparedado</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={openModal}>
            <Image source={require('./assets/menu/burrito.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Burrito</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal visible={modalVisible} animationType="slide" transparent={true} onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Nombre</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonModal}>
                
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonModal} >
                <Text style={styles.buttonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  buttonModal: {
    backgroundColor: 'white',
    marginEnd: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: 'gray',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  IconPlus: {
    position: 'absolute',
    top: 80,
    left: 120,
    width: 85,
    height: 90,
  },
  goBackButton: {
    position: 'absolute',
    top: 180,
    left: 40,
  },
  goBackButtonImage: {
    width: 50,
    height: 50,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    alignItems: 'center',
  },
  containerButtons: {
    marginTop: 135,
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
export default Menu;
