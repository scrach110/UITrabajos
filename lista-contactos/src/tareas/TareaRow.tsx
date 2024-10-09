import { Tarea } from "./Tarea"




export const TareaRow : React.FC<Tarea> = ({ nombreTarea }) => {
    return(
        <tr>
            <label>
                <input type="checkbox" />
                <span> <th scope="col">{nombreTarea}</th> </span>
            </label>
            
            
        
        </tr>

    )
}