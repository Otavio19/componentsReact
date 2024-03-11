import CardOrder from "../../components/cardOrder"

function Orders() {

    let orders = [{
        date: '10 de Março de 2024',
        price: '100',
        orderNumber: '10101010',
        products: [{
            productName : 'Frango',
            qtdProduct : 2,
            priceProduct : 100
        },
        {
            productName : 'Frango',
            qtdProduct : 2,
            priceProduct : 100
        }]
    },
    {
        date: '11 de Março de 2024',
        price: '200',
        orderNumber: '10101012',
        products: [{
            productName : 'Frango',
            qtdProduct : 2,
            priceProduct : 200
        },
        {
            productName : 'Frango',
            qtdProduct : 2,
            priceProduct : 100
        },
        {
            productName : 'Frango',
            qtdProduct : 2,
            priceProduct : 100
        }]
    }
]

    return (
        <>Orders
            {
                orders.map((p) => (
                    <CardOrder
                        date={p.date}
                        price={p.price}
                        orderNumber={p.orderNumber}
                        products = { p.products }
                    />
                ))
            }
        </>

    )
}

export default Orders