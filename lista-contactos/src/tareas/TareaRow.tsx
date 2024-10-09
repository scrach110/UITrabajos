import { Tarea } from "./Tarea"
import { CheckTareas } from "./CheckTareas";

type TareaRowProps = Tarea & {
    eliminarTarea: (nombreTarea: string) => void
};


export const TareaRow : React.FC<TareaRowProps> = ({ nombreTarea, eliminarTarea }) => {

    return(
        <tr>
            <td>
                <label>
                    <input type="checkbox"  />
                    <span> <th scope="col">{nombreTarea}</th> </span>
                </label>
            </td>
            <td>
                <button onClick={() => eliminarTarea(nombreTarea)}>Eliminar</button>
            </td>
        </tr>

    )
}