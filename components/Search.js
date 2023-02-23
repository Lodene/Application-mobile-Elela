import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: "91%",
  },
});

const Search = () => {
    return (
      <View style={styles.container}>
          <Text>Je suis le Search</Text>  
      </View>
    )
}

export default Search;