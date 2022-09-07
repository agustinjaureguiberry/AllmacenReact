import { stock } from "../../../memory/ListaDeProductos/Ldp"



export const ListaDePrecios = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
        }, 1000)
    })
}