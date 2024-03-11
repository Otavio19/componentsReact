import Button from "../button"
import { FaCartShopping } from "react-icons/fa6";
import styles from './style.module.css'

function Card(props){
    return(
        <>
        <div className={ styles.cardBody }>
            <img src="https://via.placeholder.com/200" alt="" />
            <div className={ styles.cardText }>
                <p className="titleCard">{ props.title }</p>
                <div className={ styles.btnBox}>
                    <Button text={props.textBtn } />
                    <Button text={ props.iconBtn } />
                </div>
            </div>
        </div>
        </>
    )
}

export default Card