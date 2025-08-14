import * as React from 'react'
import { View, Text, StyleSheet, TextInput, Pressable, Alert} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RookStackParamList } from '../../types/navigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type LoginScreenNavigationProp = NativeStackNavigationProp<RookStackParamList, 'Login'>

export function LoginScreen() {
  const [User, setUser] = React.useState('')
  const [Password, setPassword] = React.useState('')
  const [hidePassword, setHidePassword] = React.useState(true)
  const [errorPassword, setErrorPassword] = React.useState('')
  const navigation = useNavigation<LoginScreenNavigationProp>()

  function handleLogin(){
    const erro = validatePassword(Password)
    if(erro){
      setErrorPassword(erro)
      return
    }
    Alert.alert('Login Realizado', `User: ${User}`)
    setUser('')
    setPassword('')
    setErrorPassword('')
  }

  function validatePassword(password:any){
    if(password.length < 8){
      return 'A senha deve ter pelomenos 8 caracteres'
    }
    if(!/[A-Z]/.test(password)){
      return 'A senha deve conter pelomenos uma letra maiúscula'
    }
    if(!/[0-9]/.test(password)){
      return 'A senha deve conter pelomenos um número'
    }
    if (!/[!@#$%^&*]/.test(password)) {
    return "A senha deve conter pelo menos um caractere especial.";
    }
    return ''
  }
  


  function handleForgotPassword(){
    
    navigation.navigate('ForgotPassword')
  }

  function handleRegister(){
    console.log('Redirecionando para tela de registro')
  }
  
  
 return (
    <View style = {styles.centralize}>
        <View style = {styles.box}>
          <View style = {{alignItems: 'center'}}>
          
          </View>
            <TextInput
                style = {styles.input}
                placeholder='User'
                value={User}
                onChangeText={setUser}
            />
            <View style = {styles.passwordContainer}>
                <TextInput
                    style = {[styles.input, {flex: 1}]}
                    placeholder='Password'
                    secureTextEntry={hidePassword}
                    value={Password}
                    onChangeText={(validatepassword) => { 
                      setPassword(validatepassword)
                      setErrorPassword(validatePassword(validatepassword))
                    }}   
                />
                <Pressable
                    style = {styles.showButton}
                    onPress={() => setHidePassword(!hidePassword)}
                >
                  <Text style={{color: '#007AFF', fontWeight: 'bold' }}>
                    {hidePassword ? 'Show': 'Hide'}
                  </Text>
                </Pressable>
            </View>

            {errorPassword ? <Text style={{color: 'red', marginBottom: 10}}>{errorPassword}</Text> : null}


                <Pressable onPress={handleLogin} style = {styles.buttonEnter}>
                    <Text style = {styles.textEnter}>Join</Text>
                </Pressable>

                <Pressable onPress={handleRegister} style = {styles.buttonRegister}>
                  <Text style = {styles.textRegister}>Register</Text>

                </Pressable>

                
                <Pressable onPress={handleForgotPassword} style = {styles.link}>
                    <Text style = {styles.linkText}> Esqueci minha senha</Text>
                </Pressable>

              
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
    width: '80%',
    height: 350,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
  },
  titleLogin: {
    marginBottom: 20,
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 'bold',
   
  },
  
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  showButton:{
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  passwordContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  link:{
    marginTop: 10,
    alignSelf: 'center'
  },
  linkText:{
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
  buttonRegister:{
    marginTop: 15,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  textRegister:{
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonEnter:{
    backgroundColor: '#28a745',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  textEnter:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});