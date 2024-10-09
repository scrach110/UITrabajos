import { Tarea } from "../tareas/Tarea"
import { TareaTable } from "../tareas/TareaTable"
import { useState } from "react"
import { CheckTareas } from "../tareas/CheckTareas"





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
        const [totalTareas, setTotalTareas] = useState<number>(0);

        const agregarTarea = (e: React.FormEvent) => {
            e.preventDefault();
            if (nuevaTarea.trim()) {
              const tarea: Tarea = { nombreTarea: nuevaTarea }; 
              setTareas([...tareas, tarea]); 
              setNuevaTarea(""); 

              setTotalTareas(totalTareas + 1)

              console.log("agregando la tarea");
              
            }
          };

        const eliminarTarea = (nombreTarea: string) => {
            setTareas(tareas.filter(tarea => tarea.nombreTarea !== nombreTarea));
        };
    
    return(
        <>
        <h2>Total creadas {totalTareas}</h2>
        <h2>Total pendientes {}</h2>
        <h3>Agregar nueva tarea</h3>
            <form onSubmit={agregarTarea}>
                <input type="text" placeholder="ingrese la tarea" value={nuevaTarea} onChange={(e)=> setNuevaTarea(e.target.value)}/>
                <button type="submit">Agrega la nueva tarea</button>
            </form>

        <TareaTable tareas={tareas} eliminarTarea={eliminarTarea}/>
        </>
    )
}