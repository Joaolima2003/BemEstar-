import * as React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native';

export function LoginScreen() {
  const [user, setUser] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [hidePassword, setHidePassword] = React.useState(true)
  
  function handleLogin(){
    console.log('User', user)
    console.log('Password', password)

    setUser('')
    setPassword('')
  }
  
  
  
 return (
    <View style = {styles.centralize}>
        <View style = {styles.box}>
            <View style = {styles.titleLogin}>
                <Text>Login</Text>

            </View>
            <View style = {styles.inputs}>
                <View style = {styles.input}>
                    <TextInput
                        placeholder='User'
                        value={user}
                        onChangeText={setUser}
                    />
                </View>
                <View style = {styles.input}>
                    <TextInput
                        placeholder='Password'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        
                    
                    />
                </View>
                <Button title='Join' onPress={handleLogin}></Button>
            </View>
        </View>

    </View>
  );
}


const styles = StyleSheet.create({
  centralize: {
    flex: 1,
    backgroundColor: '#dedede',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    borderWidth: 1,
    width: '80%',
    height: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
  },
  titleLogin: {
    marginBottom: 20,
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  inputs: {
    gap: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  }
});