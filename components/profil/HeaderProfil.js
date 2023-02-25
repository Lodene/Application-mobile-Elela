import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const styles = StyleSheet.create({
  container: {
    height: "10%",
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: "grey",
    borderBottomWidth: 5
  },
  bar: {
    position: 'absolute',
    borderBottomColor: 'orange',
    borderBottomWidth: 5,
    width: 150,
  }
});

const HeaderProfil = ({handleProfilSetPage}) => {
    const [position, setPosition] = useState({ bottom: -5, left: 25 }); 

  const handleSetPageAndMove = (newPage, newPosition) => {
    handleProfilSetPage(newPage);
    setPosition(newPosition);
  }; 

    return (
      <View style={styles.container}>
        <View style={[styles.bar, position]}></View>
            <TouchableOpacity
                onPress={()=>handleSetPageAndMove(1, { bottom: -5, left: 25 })}
                style={styles.button}>
                <Text>Profil</Text>
            </TouchableOpacity> 
            <TouchableOpacity
                onPress={()=>handleSetPageAndMove(2, { bottom: -5, left: 215 })}
                style={styles.button}>
                <Text>Qr Code</Text>
            </TouchableOpacity> 
      </View>
    )
}

export default HeaderProfil;