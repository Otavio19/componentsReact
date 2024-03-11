import style from './style.module.css'
import Card from '../../components/card'
import Button from '../../components/button'
import { BiSolidTrashAlt } from "react-icons/bi";


function ProductsList() {
    return (
        <>
            <div className={ style.head }>
                <h1>Produtos</h1>
                <Button text='Cadastrar Novo Produto' />
            </div>

            <div className={ style.productList }>
                <Card title='Portuguesa' textBtn='Editar' iconBtn={ <BiSolidTrashAlt /> } />
                <Card title='Frango' textBtn='Editar' iconBtn={ <BiSolidTrashAlt /> } />
                <Card title='Calabressa' textBtn='Editar' iconBtn={ <BiSolidTrashAlt /> } />
                <Card title='Chocolate' textBtn='Editar' iconBtn={ <BiSolidTrashAlt /> } />
                <Card title='Doce de Leite' textBtn='Editar' iconBtn={ <BiSolidTrashAlt /> } />
                <Card title='Portuguesa' textBtn='Editar' iconBtn={ <BiSolidTrashAlt /> } />
                <Card title='Frango' textBtn='Editar' iconBtn={ <BiSolidTrashAlt /> } />
                <Card title='Calabressa' textBtn='Editar' iconBtn={ <BiSolidTrashAlt /> } />
                <Card title='Chocolate' textBtn='Editar' iconBtn={ <BiSolidTrashAlt /> } />
                <Card title='Doce de Leite' textBtn='Editar' iconBtn={ <BiSolidTrashAlt /> } />
            </div>

        </>
    )
}

export default ProductsList