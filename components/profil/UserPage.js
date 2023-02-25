import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: "91%",
  },
});



const UserPage = ({user, handleSetPage}) => {

    const handleLogout = async () => {
        try {
            await firebase.auth().signOut();
            handleSetPage(5)
        } catch (error) {
            console.log(error);
        } 
    }


    console.log(user);

    if (user != null){
        return (
            <View style={styles.container}>
                <Text> Salut {user.email} </Text>
                <TouchableOpacity
                    onPress={handleLogout}
                    style={styles.buttonRegister}>
                    <Text>Se déconnecter</Text>
                </TouchableOpacity>
            </View>
        ) 
    } else {
        return (
            <View style={styles.container}>
                <Text>Connectez vous pour voir votre profil :</Text>  
                <TouchableOpacity
                    onPress={() => handleSetPage(5)}
                    style={styles.buttonRegister}>
                    <Text>Se connecter</Text>
                </TouchableOpacity>
            </View>
          )
    }
}

export default UserPage;