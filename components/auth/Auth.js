import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import firebase  from '../config/Config';

const styles = StyleSheet.create({
    all: {
      backgroundColor: "red"
    },
  });

const Login = (handleSetPage) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async(email, password) => {
        try {
            await firebase.auth().signinWithEmailAndPassword(email, password);
        } catch(error) {
            console.log(error.message);
        }
    }

  return (
    <View style={styles.all}>
      <Text>Login</Text>
      <View>
        <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
            autoCapitalize="none"
            autoCorrect="none">
        </TextInput>

        <TextInput
            style={styles.input}
            placeholder="Mot de Passe"
            onChangeText={(password) => setPassword(password)}
            autoCapitalize="none"
            autoCorrect="none"
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