import { useState } from "react";
import { Luz } from "./Luz";
import { Boton } from "./Boton";

export const Semaforo = () => {
    const [colorActivo, setColorActivo] = useState("")
    const colores = ["red", "yellow", "green"]

    return (
        <>
            {colores.map((valorMap) => {
                return (
                    <Luz colorLuz={valorMap} cambiarColor={setColorActivo} colorActivo={colorActivo} />
                )
            })}
            <Boton colorActivo={colorActivo} setColorActivo={setColorActivo} />
        </>
    )

}