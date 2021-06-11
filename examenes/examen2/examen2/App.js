/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react'; 
 import {SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,useColorScheme,
  View, 
  TextInput, 
  Button, 
  Alert } from 'react-native';
 
 export default function App(){
 
   const [entrada, setEntrada]   = useState(0);
   const [conversion, setConversion] = useState(0);
   const [tasacambio, settasacambio] = useState(0); 
  
   const showAlert = () =>{
     Alert.alert(
         "Conversion exitosa",
         "Resultado: "+conversion
       );
   }
 
   const convertir =( ) =>{
     const resultado = entrada*tasacambio;
       setConversion(resultado);
   }
 
   const inicializar = () =>{
     setConversion(0);
     setEntrada(0);
   }
   
   return(
     <>
       <SafeAreaView style={misEstilos.encabezado} >
         <View>
             <Text style={misEstilos.sectionTitle}> Examen II Parcial </Text>
         </View>
       </SafeAreaView>
       <View>
           <Text style={misEstilos.sectionDescription}>Ingrese el valor a Convertir:</Text>
           <TextInput
               style={misEstilos.input}
               placeholder="Escriba un valor" 
               keyboardType="numeric"
               onChangeText={ (Valor1) => setEntrada(Valor1)}
               value= {entrada}
               defaultValue={entrada.toString()}
           />
           </View>
            <View>
           <Text style={misEstilos.sectionDescription}>Ingrese valor tasa de cambio</Text>
           <TextInput
               style={misEstilos.input}
               placeholder="Escriba un valor" 
               keyboardType="numeric"
               onChangeText={ (valor2) => settasaCambio(valor2)}
               value= {tasacambio}
               defaultValue={tasacambio.toString()}
           />
           <Text style={misEstilos.sectionDescription}>Convertir</Text>
           <TextInput
               style={misEstilos.input}
               placeholder="El resultado es"  
               defaultValue={conversion.toString()}
           /> 
           <Button
               title="Convertir"
               color="#3F51B5"
               onPress={inicializar}
           ></Button> 
       </View>
     </>
   )
 }
 
 const misEstilos = StyleSheet.create({
   encabezado:{
       backgroundColor: '#FFA000',
       height: 150,
       borderBottomLeftRadius: 30,
       borderBottomRightRadius: 30,
       alignItems: 'center',
       padding:25
   },
   input:{
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