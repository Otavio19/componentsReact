import styles from './style.module.css'

function Button(props){
    return(
        <button className={ styles.btn }>{ props.text }</button>
    )
}

export default Button