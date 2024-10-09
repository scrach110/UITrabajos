import { Tarea } from "../tareas/Tarea"
import { TareaTable } from "../tareas/TareaTable"
import { useState } from "react"





/*const misTareas: Tarea[] = [
    {
        nombreTarea: 'tarea 1'
    },
    {
        nombreTarea: 'tarea 2'
    }
]
*/

export const BodyApp = () => {

        const [tareas, setTareas] = useState<Tarea[]>([]);
        const [nuevaTarea, setNuevaTarea] = useState<string>("");
    
    
        const agregarTarea = (e: React.FormEvent) => {
            e.preventDefault();
            if (nuevaTarea.trim()) {
              const tarea: Tarea = { nombreTarea: nuevaTarea }; 
              setTareas([...tareas, tarea]); 
              setNuevaTarea(""); 
            }
          };
    
    return(
        <>
        
        <h3>Agregar nueva tarea</h3>
            <form onSubmit={agregarTarea}>
                <input type="text" placeholder="ingrese la tarea" value={nuevaTarea} onChange={(e)=> setNuevaTarea(e.target.value)}/>
                <button type="submit">Agrega la nueva tarea</button>
            </form>

        <TareaTable tareas={tareas}/>
        </>
    )
}