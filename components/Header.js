import { Text, View, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    height: '15%',
    borderWidth: 5,
  },
});

const Header = () => {

    return (
      <View style={styles.container}>
          <Text>Je suis le header</Text>  
      </View>
    )
}

export default Header;