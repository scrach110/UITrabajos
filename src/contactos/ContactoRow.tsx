import { Contacto } from "../domain/Contacto"
import { ContactoListPhone } from "./ContactoListPhone";
import { DomicilioBadge } from "./DomicilioBadge";


/* type ContactoProps = {
    contacto: Contacto;
}
*/

export const ContactoRow : React.FC<Contacto>= ({id,nombre,apellido,mail,domicilio,telefonos}) => {
    return (
        <tr>
            <th scope="col">{id}</th>
            <th scope="col">{nombre}</th>
            <th scope="col">{apellido}</th>
            <th scope="col">{mail.toLocaleUpperCase()}</th>
            <td><DomicilioBadge {...domicilio} /></td>
            <td><ContactoListPhone telefonos={telefonos} /></td>




        </tr>
    )
}