import { Text, View, StyleSheet, ScrollView, Image, Button, TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useState } from 'react';


const Footer = ({handleSetPage, page}) => {
  const [position, setPosition] = useState({ top: 0, left: 15 }); 

  const handleSetPageAndMove = (newPage, newPosition) => {
    handleSetPage(newPage);
    setPosition(newPosition);
  }; 

  

    return (
      <View style={styles.container}>
      <View style={[styles.bar, position]}></View>
      
      <TouchableOpacity 
        style={styles.element} 
        onPress={() => {
          handleSetPageAndMove(1, { top: 0, left: 15 }); 
        }}>
        <Image
          style={[styles.image] }
          source={require('./homeWhite.png')}
        />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.element} onPress={() => {
          handleSetPageAndMove(2, { top: 0, left: 140 }); 
        }}>
        <Image
          style={styles.image}
          source={require('./chercherWhite.png')}
        />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.element} onPress={() => {
          handleSetPageAndMove(4, { top: 0, left: 275 }); 
        }}>
        <Image
          style={styles.image}
          source={require('./profilWhite.png')}
        />
      </TouchableOpacity>
      
    </View>
    )
}

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
  },
  bar: {
    position: 'absolute',
    borderTopColor: 'orange',
    borderTopWidth: 5,
    width: 100,

  }
});

export default Footer;