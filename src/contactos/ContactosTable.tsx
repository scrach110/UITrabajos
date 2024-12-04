import { ContactoRow } from "./ContactoRow"
import { Contacto } from "../domain/Contacto"


type TablaContactosProps = {
    contactos: Contacto[]
};

export const ContactosTable: React.FC<TablaContactosProps> = ( { contactos } ) => {
    
 //   {

//    const miContacto ={
//        nombre: `pepe`,
//        apellido: `lolas`,
//        id: 321313,
 //       mail: `asdasdsad@gmail.com`,
 //   }

 //   const miOtroContacto ={
 //       nombre: `juan`,
///        apellido: `los`,
 //       id: 1313,
//        mail: `asad@gmail.com`,
//    }


 //   const contactos = [miContacto, miOtroContacto]
    
    
 //   contactos.map(contacto => console.log(contacto.apellido));
    
    
    return (
    <table className="table table-striped table-hover">
        <thead>
         <tr>
            <th scope="col">id</th>
            <th scope="col">nombre</th>
            <th scope="col">apellido</th>
            <th scope="col">mail</th>
            <th scope="col">calle</th>
            <th scope="col">telefono</th>
        </tr>
    </thead>
    <tbody>
        {
            contactos.map((contacto) => 
            
            <ContactoRow key={contacto.id}{ ...contacto}/>
    ) }
    </tbody>
    </table>
)
}
 /*<ContactoRow apellido="lolingas" nombre="lulo" id={1111} mail="lulo@gmail.com"/>
        <ContactoRow apellido={miContacto.apellido} nombre={miContacto.nombre} id={miContacto.id} mail={miContacto.mail}/>

        {
            // IMPORTANTE ÉSTO
            contactos.map((contacto) =>
                (
                    //<ContactoRow  key={contacto.id} apellido={contacto.apellido} nombre={contacto.nombre} mail={contacto.mail} id={contacto.id}/>
                    <ContactoRow  key={contacto.id} {...contacto}/>
                )
            )
        }
*/