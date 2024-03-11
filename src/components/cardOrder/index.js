import style from './style.module.css'

function CardOrder( props ) {

    let product = props.products || []

    return (
        <>
            <div className={style.cardBox}>
                <div className="date">
                    <span>{ props.date }</span> | <span>{ props.price }</span>
                </div>
                <div className={style.orderNumber}>
                    <p>Pedido { props.orderNumber}</p>
                </div>
                <div className={style.productsOrder}>
                    {
                        product.map((p) => (
                            <div className={style.productOrder}>
                                <img src="https://via.placeholder.com/100" alt="" />
                                <div>
                                    <p>{p.productName}</p>
                                    <p>{p.qtdProduct} un</p>
                                    <p>R$ {p.priceProduct}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default CardOrder