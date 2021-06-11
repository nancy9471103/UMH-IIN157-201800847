import React from "react";


export default function Alumno(props){

    console.log(props);

    return (
        <div>
            <h2> Datos alumno </h2>
            <table>
                <tbody>
                <tr>
                    <td>Identidad: </td> {props.identidad} <td></td>
                </tr> 
                <tr>
                    <td>Nombre: </td> {props.nombre} <td></td> 
              </tr> 
              <tr>
                    <td>Nacimiento: </td> {props.nacimiento} <td></td> 
              </tr> 
              <tr>
                    <td>promedio: </td> {props.promedio} <td></td> 
              </tr> 
              </tbody>
            </table> 

     </div>        
    )
}

