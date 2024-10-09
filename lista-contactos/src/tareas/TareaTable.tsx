import { TareaRow } from "./TareaRow"
import { Tarea } from "./Tarea"

type tareaProps = {
    tareas: Tarea[];
    eliminarTarea: (nombreTarea: string) => void;
}


export const TareaTable: React.FC<tareaProps> = ( { tareas, eliminarTarea} ) => {


    return(
        
        <table className="table table-striped table-hover">
            <thead>
                <tr>

                    <th scope="col">tareas:</th>
        
                </tr>
            </thead>
    
        <tbody>

            {
                tareas.map((tarea => 
                    <TareaRow {...tarea} eliminarTarea={eliminarTarea}/>
                ))
            }

        </tbody>

        </table>

    )
}