import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: "91%",
  },
});

const Profil = (user) => {
    console.log(user['email']);
    return (
      <View style={styles.container}>
          <Text>Bonjour {user.email} </Text>  
      </View>
    )
}

export default Profil;