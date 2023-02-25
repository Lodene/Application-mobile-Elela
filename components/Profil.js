import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { firebase } from './config/Config';
;

import HeaderProfil from './profil/HeaderProfil'
import QrCodeProfil from './profil/QrCodeProfil';
import UserPage from './profil/UserPage';

  

const Profil = ({user, handleSetPage}) => {
  const [ProfilPage, setProfilPage] = useState(1)

  const handleProfilSetPage = (number) => {
    setProfilPage(number)
  }

  return (
    <View style={styles.container}>
      <HeaderProfil handleProfilSetPage={handleProfilSetPage} />
      {ProfilPage === 1 && <UserPage  user={user} handleSetPage={handleSetPage}/>}
      {ProfilPage === 2 && <QrCodeProfil  user={user}/>}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      height: "91%",
    },
  });
    

export default Profil