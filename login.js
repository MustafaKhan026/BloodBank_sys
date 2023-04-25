import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function LoginPage() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    console.log(`Login button pressed with username: ${username} and password: ${password}`);
  };

  return (
    <View>
      <Text>Please enter your login information:</Text>
      <TextInput placeholder="Username" onChangeText={setUsername} />
      <TextInput placeholder="Password" onChangeText={setPassword} secureTextEntry={true} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
