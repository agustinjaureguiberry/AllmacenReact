import { useState } from "react"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './style/Contador.scss'

let valor = true


const Contador = () => {
    const [contador, setContador] = useState(0)
    const sumar = () => {
        setContador(contador + 1);
        valor = true
    }

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1)
            valor = false
        }
    }


    return (
        <div className={valor ? "contadorContainerS" : "contadorContainerR"}>
            <h2>Contador con efecto</h2>
            <div className="contador">
                <Box sx={{ '& button': { m: 1 } }}>
                    <div>
                        <Button onClick={restar} variant="contained" size="small">
                            Restar
                        </Button>
                    </div>
                    <p>{contador}</p>
                    <div>
                        <Button onClick={sumar} variant="contained" size="small">
                            Sumar
                        </Button>
                    </div>
                </Box>
            </div>
        </div>

    )
}



export default Contador