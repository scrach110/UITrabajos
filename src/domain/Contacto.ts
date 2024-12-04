
// ESTE CONTACTO ES DEL NEGOCIO (Bussiness logic), LO QUE SE LLEVARIA POR EJEMPLO LA BASE DE DATOS 


export type Contacto = {
    id: number;
    nombre: string;
    apellido: string;
    mail: string;
    domicilio: Domicilio;
    telefonos: Telefono[];
}

export type Domicilio = {
    calle: string;
    numero: number;
}


export type Telefono = {
    numero: string,
    tipo: tipoTelefono
    
}

type tipoTelefono = "Linea" | "celular"     

