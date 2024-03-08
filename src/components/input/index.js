import style from './style.module.css'

import PropTypes from 'prop-types'

function Input( props ){
    return(
        <div className={ style.inptBox }>
            <div className={ style.icon }>{props.icon}</div>
            <div className={ style.contentBox }>
                <input type={ props.inptType } name="email" id= { props.inptId } />
                <label htmlFor={ props.inptId }>{ props.textLbl }</label>
            </div>
        </div>
    )
}

Input.propTypes = {
    icon: PropTypes.node,
    inptType: PropTypes.string,
    inptId: PropTypes.string,
    textLbl: PropTypes.string,
};

export default Input