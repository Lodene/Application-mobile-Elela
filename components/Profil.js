import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: "91%",
  },
});

const Profil = () => {
    return (
      <View style={styles.container}>
          <Text>Je suis le Profil</Text>  
      </View>
    )
}

export default Profil;