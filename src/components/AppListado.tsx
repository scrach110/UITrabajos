import { ContactosTable } from "../contactos/ContactosTable" 
import { Title } from "../Title"
import { Contacto } from "../domain/Contacto"
//import { useState } from "react";



export const AppListado = () => {




const miTitulo = `tabla contactos`;

const misContactos: Contacto[] = [
    {
        nombre: `pepe`,
        apellido: `sas`,
        id: 1,
        mail: `mail@gmail.com`,
        domicilio: {
            calle: `Dr.Ortiz`,
            numero: 1211
        },
        telefonos: [
            {
            numero:"0112243405132",
            tipo: "celular"
            },
            {
            numero:"0224954235",
            tipo: "Linea"
            }
        ]

    },
    {
        nombre: `luis`,
        apellido: `alberto`,
        id: 3,
        mail: `luisalbreto@gmail.com`,
        domicilio: {
            calle: `Dr.Torras`,
            numero: 1211
        },
        telefonos: [
            {
            numero:"022224505132",
            tipo:"celular"
            },
            {
            numero:"0224954235",
            tipo:"celular"
            }
        ]
    },
    {
        id: 2,
        nombre: "ricardo",
        apellido: "huevos largos",
        mail: "ricardohuevoslargos@gmail.com",
        domicilio: {
            calle: `Almirante brown`,
            numero: 1211
        },
        telefonos: [
            {
            numero:"2243405132",
            tipo:"Linea"
            },
            {
            numero:"0224954235",
            tipo:"celular"
            }
        ]
    }
]


  return(
        <>
        <Title title={miTitulo}/>
        <ContactosTable contactos={misContactos}/> 
        </>
    )
}





  


 /*

// let contador: number = 0;
// setContador es una funcion que hace que actualice el valor, se ahorra todos los listeners.
// evita que se re-renderize todo, solo el elemento que se cambió (contador en éste caso) evita el F5.
const [contador, setContador] = useState(0);

 const onClickIncement = (event: React.MouseEvent) => {
    console.log("aumentando el sas", event);
   // contador ++;

    setContador((prevValue) => prevValue + 1 )


    console.log(contador);
    
 
 <div >

            <span className="badge text-bg-info"> {contador} </span>
           
        </div>
        
        <button 
            className="btn btn-outline btn-warning"
            onClick={onClickIncement}
        >
        incrementar</button>
        */