import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import { firebase }  from '../config/Config';

const styles = StyleSheet.create({
    all: {
    },
  });

const Login = (handleSetPage) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async(email, password) => {
        try {
            console.log("on try");
            await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log("on termine le try");
        } catch(error) {
            console.log(error.message);
        } 
    }

  return (
    <View style={styles.all}>
      <Text>Login</Text>
      <View>
        <TextInput
            required
            style={styles.input}
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
            autoCapitalize="none">
        </TextInput>

        <TextInput
        required
            style={styles.input}
            placeholder="Mot de Passe"
            onChangeText={(password) => setPassword(password)}
            autoCapitalize="none"
            secureTextEntry={true}>
        </TextInput>
      </View>
      <TouchableOpacity
            onPress={() => loginUser(email, password)}
            style={styles.buttonValide}>
            <Text>Se Connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity
            onPress={()=>handleSetPage(6)}
            style={styles.buttonRegister}>
            <Text>Créer son compte</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login