import { Text, View, StyleSheet, ScrollView, Image, Button, TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';


const styles = StyleSheet.create({
  container: {
    height: "9%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#011627',
    width: "100%",
  },
  image: {
    width: 25,
    height: 25,
  },
  position : {
    borderTopColor: "#FFC100",
    borderTopWidth: 5,
    borderRadius: 1,
    width: 100
  },
  element: {
    width: "20%",
    height: "100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const Footer = ({handleSetPage}) => {
  

    return (
      <View style={styles.container}>
        
        <TouchableOpacity style={[styles.position, styles.element]} onPress={()=>handleSetPage(1)}>
          <Image
            style={[styles.image] }
            source={require('./homeWhite.png')}
          />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.element} onPress={()=>handleSetPage(2)}>
          <Image
            style={styles.image}
            source={require('./chercherWhite.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.element} onPress={()=>handleSetPage(3)}>
          <Image
            style={styles.image}
            source={require('./localisationWhite.png')}
          />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.element} onPress={()=>handleSetPage(4)}>
          <Image
            style={styles.image}
            source={require('./profilWhite.png')}
          />
        </TouchableOpacity>
        
      </View>
    )
}

export default Footer;