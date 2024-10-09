import { TareaRow } from "./TareaRow"
import { Tarea } from "./Tarea"

type tareaProps = {
    tareas: Tarea[]
}


export const TareaTable: React.FC<tareaProps> = ( { tareas } ) => {


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
                    <TareaRow {...tarea}/>
                ))
            }

        </tbody>

        </table>

    )
}