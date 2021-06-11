/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  Alert
} from 'react-native';

export default function App(){

  const [entrada, setEntrada] = useState(0);
  const [conversion, setConversion]= useState(0);

  const showAlert = () => {
    Alert.alert("","Conversión exitosa",
    "Resultado"+conversion);

  }

  const convertir = (valor) => {
    const resultado = valor*24.64;
    setEntrada(valor);
    setConversion(resultado);
  }

  const inicializar = () => {
    setConversion(0);
    setEntrada(0);
  }
  return(
    <>
    <SafeAreaView style = {styles.encabezado}>
     <view>
     <Text Style={styles.sectionTitle}> 
     Convertidor de monedas
     </Text>
     </view>

    </SafeAreaView>
    <view>
    <TextInput style={styles.input}>
     placeholder="Escriba un valor en $"
     keyboardType = "numeric"
     onChange = {(e) => convertir(e.nativeEvent.text)}
     defaultValue={entrada.toString()}
    </TextInput>
      style={misEstilos.input}
      placeholder="Valor en lps"
      defaultValue={conversion.toString()}
     </view>

     <Button
       title="Limpiar"
       color="725ded"
       onPress = {inicializar}

     />
     <Text style={misEstilos.sectionDescription}>Entrada:{entrada}</Text>
     <Text style={misEstilos.sectionDescription}>Conversion:{conversion}</Text>
  </>

  )
}

const styles = StyleSheet.create({
  encabezado:{
   backgroundColor:'ff5533',
   height: 200,
   borderBottomLeftRadius: 30,
   borderBottomRightRadius: 30,
   alignItems: 'center'
  },

  Input:{
    height: 40,
    margin: 12,
    borderWidth: 1

  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
