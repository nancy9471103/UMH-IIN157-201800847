/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect, useState } from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Button,
   TextInput,
   Image,
   Alert
 } from 'react-native';
 import Movie from './src/componentes/Pelicula';
 
 
 function App(){
   const [nombre, setNombre] = useState(0);
   const [Dir, setDir] = useState(0);
   const [sinopsis, setsinopsis] = useState(0);
 
   const [listaMovie, setMovie] = useState( [
   {id:0, Nom : "", Dir : "", sinopsis : ""}
   
 ]);
 
   const [nuevoMovie, addMovie] = useState(false);
 
   useEffect( () => {
     if(nuevoMovie === true){
       listaMovie.push({id:1, Nom : nombre, Dir : Dir, sinopsis : sinopsis});
     }
     addMovie(false);
   },[nuevoMovie])
 
   const agregarMovie = () => {
     addMovie(true);
     Alert.alert(
       "Nueva Pelicula",
       "Se Agregó Pelicula exitosamente",
       [
         {
           text: "Cancel",
           onPress: () => console.log("Cancel Pressed"),
           style: "cancel"
         },
         { text: "OK", onPress: () => console.log("OK Pressed") }
       ]
     );
   }
   const limpiar = () =>{
     setNombre(0);
     setAño(0);
     setGenero(0);
 
   }
 
   return(
     <>
     <SafeAreaView style={styles.fondo}>
       <Image
           style={styles.logo}
           source={require("./Movies.png")}
         />
     <Text style={styles.sectionDescriptionTop}>Nombre de Pelicula:</Text>
       <TextInput
       style={styles.input}
       placeholder="Escriba Nombre de la Pelicula"
       value={nombre}
       onChangeText={(newValue)=> setNombre(newValue)}
       ></TextInput>
 
       <Text style={styles.sectionDescriptionTop}>Nombre del Director:</Text>
       <TextInput
       style={styles.input}
       placeholder="Escriba Nombre del Director"
       value={Dir}
       onChangeText={(newValue)=> setDir(newValue)}
       ></TextInput>
 
 
       <Text style={styles.sectionDescriptionTop}>sinopsis:</Text>
       <TextInput
       style={styles.input}
       placeholder="Escriba la sinopsis"
       value={sinopsis}
       onChangeText={(newValue)=> setsinopsis(newValue)}
       >
       </TextInput>
       <Button styles={styles.boton} title="Agregar Pelicula" color="#3CF0B2"onPress={agregarMovie}></Button>
       <Button styles={styles.boton} title="Limpiar" color="#23B07F" onPress={limpiar}></Button>
       </SafeAreaView>
       <ScrollView style={styles.fondoScroll}>
         {
           listaMovie.map( (item,index) => (
                 <Movie data={item}/>
           ))
         }
 
       </ScrollView>
       </>
 
   );
 }
 
 const styles = StyleSheet.create({
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
   sectionDescriptionTop: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
     color: "white"
   },
   highlight: {
     fontWeight: '700',
   },
   titulo: {
     fontSize: 100,
     fontWeight: '600',
   },
   boton:{
     marginTop:10,
     marginLeft:10,
     marginRight:10,
     borderRadius:10,
     height: 70,
   },
   logo: {
     justifyContent: 'center',
     alignItems: 'center',
     width: 100,
     height: 100,
     left:140
 },
 fondo: {
   backgroundColor: "#488CFF"
 },
 fondoScroll: {
   backgroundColor: "#488CFF"
 },
 input:{
   height: 40,
 margin: 11,
 borderWidth: 2,
 backgroundColor:"white"
 },
 
 });
 
 export default App;