import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: "81%",
  },
});

const QrCodeProfil = ({user}) => {
    if (user != null){
        return (
            <View style={styles.container}>
                <Text>Je suis le QrCodeProfil</Text>  
            </View>
          )
    } else {
        return (
            <View style={styles.container}>
                <Text>Je ne suis pas connecté donc pas de qr code</Text>  
            </View>
          )
    }
    
}

export default QrCodeProfil;