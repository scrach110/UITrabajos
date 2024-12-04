import { Telefono } from "../domain/Contacto";


type TelefonoProps = {
    telefonos: Telefono[]
}


export const ContactoListPhone: React.FC<TelefonoProps> = ({ telefonos }) => {

    return (
        <ol className="list-group list-group-numbered">
        {
            telefonos.map((telefono) =>
                <li className="list-group-item"> 
                Numero: {telefono.numero},
                Tipo: {telefono.tipo} 
                { telefono.tipo === "celular" ? 
                    <i className="bi bi-android"></i> : 
                    <i className="bi bi-bag-fill"></i>
                }
                </li> 
                                
                
                
                
            )
            
        }
        
        </ol>
        
    )


}