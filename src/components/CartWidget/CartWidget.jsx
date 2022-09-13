import carro from '../../assets/img/cart.svg'

export const CartWidget = () => {

    return (
        <div className='carroContainer'>
            <span>4</span>
            <img src={carro} alt="" className="carro" />
        </div>
    )
}

