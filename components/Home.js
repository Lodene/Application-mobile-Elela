import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: "91%",
  },
});

const Home = () => {
    return (
      <View style={styles.container}>
          <Text>Je suis le Home</Text>  
      </View>
    )
}

export default Home;