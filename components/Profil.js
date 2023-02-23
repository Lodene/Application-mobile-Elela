import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { firebase } from './config/Config';
  

const Profil = ({user, handleSetPage}) => {
    const handleLogout = async () => {
        try {
            await firebase.auth().signOut();
            handleSetPage(5)
        } catch (error) {
            console.log(error);
        } 
    }

    console.log("user : ");
    console.log(user.email);
    return (
      <View style={styles.container}>
          <Text>Bonjour {user.email} </Text>  
          <TouchableOpacity
            onPress={handleLogout}
            style={styles.buttonRegister}>
            <Text>Se déconnecter</Text>
      </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height: "91%",
    },
  });
    

export default Profil