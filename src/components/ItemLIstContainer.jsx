
const ItemListContainer = (props) => {

    const { nombre, direccion, edad } = props

    return (
        <div>
            <h1>Datos del creador</h1>
            <p>Nombre y Apellido: {nombre}</p>
            <p>Edad: {edad}</p>
            <p>Direccion: {direccion}</p>
        </div>
    )
}

export default ItemListContainer