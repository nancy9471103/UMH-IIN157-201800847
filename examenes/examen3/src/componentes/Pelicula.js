import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
export default function Movie(props){
    const {data} = props;
    const {id = 0, Nom = nombre, Dir = Dir, sinopsis = sinopsis} = data;

    return(
        <View style={estilos.contenedor}>
            <Text style= {estilos.titulo}>{"Nombre de la pelicula:"}</Text>
            <Text style= {estilos.descripcion}>{Nom}</Text>
            <Text style= {estilos.titulo}>{"Nombre del Director:"}</Text>
            <Text style= {estilos.descripcion}>{Dir}</Text>
            <Text style= {estilos.titulo}>{"Sinopsis:"}</Text>
            <Text style= {estilos.descripcion}>{sinopsis}</Text>
            </View>
    )
}

const estilos = StyleSheet.create({
    contenedor:{
        width:'95%',
        height:205,
        padding:15,
        marginLeft:10,
        marginRight:10,
        margin:10,
        marginBottom:10,
        marginTop:10,
        borderRadius:10,
        backgroundColor:'#154360'
    },
    titulo:{
        fontSize:20,
        fontWeight:'500',
        color:'white'
    },
    descripcion: {
        fontSize: 16,
        fontWeight: '600',
        color:'#80F0C9'
      },
       logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
        left:150
    }
}
)