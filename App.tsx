import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import Footer from './components/Footer';
import Home from './components/Home';
import Search from './components/Search';
import Maps from './components/Maps';
import Profil from './components/Profil';
import Auth from './components/auth/Auth';
import Register from './components/auth/Register';
import { firebase } from './components/config/Config';


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100%',
    maxWidth: '100%',
  },
  
}); 



const App = () => {
  console.log("commence");
  useEffect(() => {
    const auth = firebase.auth();
    const susbscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return susbscriber; 
  }, []);
  
  const [page, setPage] = useState(1);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<firebase.User | null>(null);

  const handleSetPage = (param: number) => {
    setPage(param);
  };

  const onAuthStateChanged = (user: firebase.User | null) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };


  if (initializing) {
    console.log('aled'); 
    return null;
  }


  
  return (
    <View style={styles.container}>
      {page === 1 && <Home />}
      {page === 2 && <Search />}
      {/* {page === 3 && <Maps />} */}
      {page === 4 && <Profil user={user} handleSetPage={handleSetPage}/>}
      {page === 5 && <Auth handleSetPage={handleSetPage} />}
      {page === 6 && <Register handleSetPage={handleSetPage} />}
      <Footer handleSetPage={handleSetPage} page={page}/>
    </View>
  );
};

export default App;