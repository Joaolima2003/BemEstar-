import * as React from 'react'
import { View, Text, StyleSheet, TextInput, Pressable, Alert, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RookStackParamList } from '../../types/navigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Ionicons from '@expo/vector-icons/Ionicons'


const yupValidation = Yup.object().shape({
  name: Yup.string().min(3, 'O nome deve ter pelo menos 3 caracteres').required('O nome é obrigatório'),
  email: Yup.string().email('Email inválido').required('O email é obrigatório'),
  password: Yup.string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
    .matches(/[0-9]/, 'A senha deve conter pelo menos um número')
    .matches(/[!@#$%^&*]/, 'A senha deve conter pelo menos um caractere especial')
    .required('A senha é obrigatória'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'As senhas não coincidem').required('Confirmar senha é obrigatório'),
})

type RegisterScreenNavigationProp = NativeStackNavigationProp<RookStackParamList, 'Register'>

export function RegisterUserScreen() {
  const navigation = useNavigation<RegisterScreenNavigationProp>()
  const [hidePassword, setHidePassword] = React.useState(true)
  const [hideConfirmPassword, setHideConfirmPassword] = React.useState(true)

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      }}
      style={styles.background}
    >
      <View style={styles.centralize}>
        <View style={styles.box}>
          <Text style={styles.titleLogin}>Register</Text>

          <Formik
            initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
            validationSchema={yupValidation}
            onSubmit={(values, { resetForm }) => {
              Alert.alert('Cadastro realizado', `Bem-vindo, ${values.name}!`)
              resetForm()
              navigation.navigate('Login')
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <>
                
                <TextInput
                  style={styles.input}
                  placeholder="Nome"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                {errors.name && touched.name && (
                  <Text style={styles.errorText}>{errors.name}</Text>
                )}

                
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}

                
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={[styles.input, { flex: 1 }]}
                    placeholder="Senha"
                    secureTextEntry={hidePassword}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  <Pressable
                    style={styles.showButton}
                    onPress={() => setHidePassword(!hidePassword)}
                  >
                    <Ionicons
                      name={hidePassword ? 'eye-off' : 'eye'}
                      size={24}
                      color="gray"
                    />
                  </Pressable>
                </View>
                {errors.password && touched.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}

                
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={[styles.input, { flex: 1 }]}
                    placeholder="Confirmar Senha"
                    secureTextEntry={hideConfirmPassword}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                  />
                  <Pressable
                    style={styles.showButton}
                    onPress={() => setHideConfirmPassword(!hideConfirmPassword)}
                  >
                    <Ionicons
                      name={hideConfirmPassword ? 'eye-off' : 'eye'}
                      size={24}
                      color="gray"
                    />
                  </Pressable>
                </View>
                {errors.confirmPassword && touched.confirmPassword && (
                  <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                )}

                
                <Pressable onPress={handleSubmit as any} style={styles.buttonEnter}>
                  <Text style={styles.textEnter}>Cadastrar</Text>
                </Pressable>

               
                <Pressable
                  onPress={() => navigation.navigate('Login')}
                  style={styles.buttonRegister}
                >
                  <Text style={styles.textRegister}>Voltar ao Login</Text>
                </Pressable>
              </>
            )}
          </Formik>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  centralize: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
  },
  titleLogin: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  showButton: {
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonRegister: {
    marginTop: 15,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  textRegister: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonEnter: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  textEnter: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
})
