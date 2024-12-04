type ContactoRowProps = {
    id: number, 
    nombre: string,
    apellido: string,
    email: string
}

export const ContactoBody = (contacto: ContactoRowProps)=> {
    return(
       
       <tr>
        <td>{contacto.id}</td>
        <td>{contacto.nombre}</td>
        <td>{contacto.apellido}</td>
        <td>{contacto.email}</td>
       </tr>
       
    )
}