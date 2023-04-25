import React, { useState } from 'react';
import { View, Text, Button,StyleSheet }  from 'react-native';

export default function Logout() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    // Perform any necessary cleanup or API calls here
    setIsLoggedIn(false);
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <>
          <Text style={styles.note}>You are logged in!</Text>
          <Button title="Logout" onPress={handleLogout} />
        </>
      ) : (
        <Text style={styles.note} >You are logged out.</Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#da3e56',
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  note:{
    fontSize:24,
    color:'white',
    fontWeight:'bold',
  },
 
});
