import style from './style.module.css'
import { FaChrome } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import Button from '../button'
import Input from '../input';
import { FaRegEnvelope } from "react-icons/fa6";
import { IoArrowRedoSharp } from "react-icons/io5";
import { IoArrowUndo } from "react-icons/io5";
import { useState } from 'react';

function Authentic(){
    const [ checkBoxCheck, setCheckBoxCheck ] = useState(true)
    
    const handleChangeChecbox = () =>{
        setCheckBoxCheck(!checkBoxCheck)
    }

    const checkBoxPosition = {
        left: checkBoxCheck ? '30rem' : '0'
    }

    return(

        <div className= {style.authBox}>
            
            <div className={ style.containerAuth }>
                <h1>Acessar Conta</h1>
                <ul>
                    <li><FaChrome /></li>
                    <p>Acessar com o Google</p>
                </ul>
                <Input 
                inptId='emailId'
                textLbl='Email'
                icon={ < FaUser /> }
                inptType='email'
                />
                <Input
                icon={< FaLock />}
                inptId='passwordId'
                inptType='password'
                textLbl='Senha'
                />

                <Button text='Acessar' />
            </div>

            <div className={ style.containerAuth }>
                <h1>Criar Conta</h1>
                <ul>
                    <li><FaChrome /></li>
                </ul>

                <Input 
                inptId='nameId'
                textLbl='Nome'
                icon={ < FaUser /> }
                inptType='text'
                />

                <Input 
                inptId='emailRegisterId'
                textLbl='Email'
                icon={ < FaRegEnvelope /> }
                inptType='email'
                />

                <Input
                icon={< FaLock />}
                inptId='passwordRegisterId'
                inptType='password'
                textLbl='Senha'
                />

                <Input
                    icon={< FaLock />}
                    inptId='repeatPassowrdId'
                    inptType='repeatPassword'
                    textLbl='Repita a Senha'
                />

                <Button text='Registrar' />
            </div>
            <input type="checkbox" id='maskInpt' className={ style.maskInpt } checked={ checkBoxCheck } onChange={ handleChangeChecbox }/>
            <div className={ style.mask } style={ checkBoxPosition } >
            <h1>{ checkBoxCheck ? 'Bem-Vindo!' : 'Bom Ve-lo Novamente!'}</h1>
                <br />
                <p>
                { checkBoxCheck ? 
                'Estamos ansiosos para vê-lo(a) prosperar e crescer conosco.' :
                'Agradecemos por confiar em nós para suas necessidades e esperamos que cada interação com o sistema seja uma experiência positiva e produtiva.'}
                </p>
                <p>
                { checkBoxCheck ?
                'Se surgir alguma dúvida, nossa equipe de suporte está sempre disponível para ajudar. Vamos começar essa jornada emocionante juntos!':
                'Agradecemos por escolher nossa plataforma. Estamos ansiosos para ver como você fará parte dessa jornada digital.'}
                </p>
                <br />
                <label htmlFor="maskInpt">
                    { checkBoxCheck ? 
                    (<p>Não Possui Uma Conta? Clique aqui! <IoArrowUndo /></p>) :
                    <p>Já Uma Conta? Clique aqui! <IoArrowRedoSharp /></p>}
                </label>
            </div>
        </div>
    )
}



export default Authentic