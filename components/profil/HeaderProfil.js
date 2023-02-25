import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: "10%",
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: "grey",
    borderBottomWidth: 5
  },
  button: {
    
  }
});

const HeaderProfil = ({handleProfilSetPage}) => {
    return (
      <View style={styles.container}>
            <TouchableOpacity
                onPress={()=>handleProfilSetPage(1)}
                style={styles.button}>
                <Text>Profil</Text>
            </TouchableOpacity> 
            <TouchableOpacity
                onPress={()=>handleProfilSetPage(2)}
                style={styles.button}>
                <Text>Qr Code</Text>
            </TouchableOpacity> 
      </View>
    )
}

export default HeaderProfil;