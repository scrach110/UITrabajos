import { Domicilio } from "../domain/Contacto"

export const DomicilioBadge: React.FC<Domicilio> = ({ calle, numero}) => {
    return(
        <span className="badge text-bg-info">
        calle: {calle} , 
        número: {numero}
        </span>
    )
}



