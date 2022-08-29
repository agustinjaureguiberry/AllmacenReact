import carro from '../assets/img/cart.svg'

const Carrito = () => {

    return (
        <div className='carroContainer'>
            <span>4</span>
            <img src={carro} alt="" className="carro" />

        </div>
    )
}


export default Carrito