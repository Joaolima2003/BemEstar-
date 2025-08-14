import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RookStackParamList } from '../../types/navigation'

type ForgotPasswordScreenNavigationProp = NativeStackNavigationProp<RookStackParamList, 'ForgotPassword'>

export function ForgotPasswordScreen() {
  const navigation = useNavigation<ForgotPasswordScreenNavigationProp>()
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [hidePassword, setHidePassword] = useState(true)
  const [User, setUser] = useState('')

  function validatePassword(password: any) {
    if (password.length < 8) {
      return 'A senha deve ter pelo menos 8 caracteres'
    }
    if (!/[A-Z]/.test(password)) {
      return 'A senha deve conter pelo menos uma letra maiúscula'
    }
    if (!/[0-9]/.test(password)) {
      return 'A senha deve conter pelo menos um número'
    }
    return ''
  }

  function handleResetPassword() {
    const erro = validatePassword(newPassword)
    if (erro) {
      Alert.alert('Erro', erro)
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem')
      return
    }

    
    Alert.alert('Sucesso', 'Senha atualizada!')
    navigation.navigate('Login')
    setUser('')
    setNewPassword('')
    setConfirmPassword('')
  }

  return (
    <View style={styles.centralize}>
      <View style={styles.box}>
        <View>
            <TextInput style = {styles.input}
            placeholder="User"
            value= {User}
            
            />
        </View>
        

        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="New Password"
            secureTextEntry={hidePassword}
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <Pressable onPress={() => setHidePassword(!hidePassword)} style={styles.showButton}>
            <Text style={{ color: '#007AFF', fontWeight: 'bold' }}>
              {hidePassword ? 'Show' : 'Hide'}
            </Text>
          </Pressable>
        </View>

        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Confirmar senha"
            secureTextEntry={hidePassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <Pressable onPress={() => setHidePassword(!hidePassword)} style={styles.showButton}>
            <Text style={{ color: '#007AFF', fontWeight: 'bold' }}>
              {hidePassword ? 'Show' : 'Hide'}
            </Text>
          </Pressable>
        </View>

        <Pressable style={styles.buttonSend} onPress={handleResetPassword}>
          <Text style={styles.textSend}>Recuperar Senha</Text>
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
    height: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  showButton: {
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  buttonSend: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  textSend: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
})
