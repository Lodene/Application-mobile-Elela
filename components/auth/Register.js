import { View, Text } from 'react-native'
import React from 'react'

const Register = (handleSetPage) => {
  return (
    <View>
      <Text>Bonjour</Text>
      <Text>SI vous souhaitez créer votre compte, je vous invite à le faire sur notre site web à l'adresse : https://lelien.com</Text>
      <TouchableOpacity
            onPress={()=>handleSetPage(6)}
            style={styles.buttonRegister}>
            <Text>Revenir à la connexion</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Register