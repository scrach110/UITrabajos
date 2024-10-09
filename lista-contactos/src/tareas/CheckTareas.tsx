import { useState } from "react"

const [totalPendientes, setTotalPendientes] = useState<number>(0);

export const CheckTareas = () => {
    setTotalPendientes(totalPendientes + 1) 
    return totalPendientes;
}