import React from "react";
import { View, Text, TextInput, StyleSheet, Pressable, ImageBackground} from "react-native"
import { useNavigation } from '@react-navigation/native'
import { RookStackParamList } from '../../types/navigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'


type HomeScreenNavigationProp = NativeStackNavigationProp<RookStackParamList, 'Home'>

export function HomeScreen(){
    const navigation = useNavigation<HomeScreenNavigationProp>()


    return (
    <View style={styles.container}>
      <Text>Bem-vindo à Home!</Text>
      <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.buttonText}>Esqueci minha senha</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  buttonText: {
    color: "#007bff",
    fontSize: 16,
    marginTop: 10,
  },
});
