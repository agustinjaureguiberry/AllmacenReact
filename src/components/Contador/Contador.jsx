import { useState } from 'react'


export const Contador = ({ max }) => {

    const [cant, setCant] = useState(1)

    const handleRest = () => {
        if (cant > 1) {
            setCant(cant - 1)
        }
    }

    const handleSum = () => {
        if (cant < max) {
            setCant(cant + 1)
        }
    }
}