import * as React from 'react'
import { View, Text, StyleSheet, TextInput, Pressable, Alert, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RookStackParamList } from '../../types/navigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Ionicons from '@expo/vector-icons/Ionicons'

type RegisterScreenNavigationProp = NativeStackNavigationProp<RookStackParamList, 'Register'>

export function RegisterUserScreen(){
    const navigation = useNavigation<RegisterScreenNavigationProp>()



    return (
    <View>
      <Text>Registro de Usuário</Text>
    </View>
  );
}