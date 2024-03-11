import style from './style.module.css'
import { IoExitOutline } from "react-icons/io5";
import { BiSolidHome } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { BiMenu } from "react-icons/bi";
import { useState } from 'react';
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom"
import { BiSolidTruck } from "react-icons/bi";


function NavBar() {

    const [showMenu, setShowMenu] = useState(true)

    const handleShowMenu = () => {
        setShowMenu = (!showMenu)
    }

    return (
        <>
            <input type="checkbox" id='navShow' className={style.navShow} />
            <div className={style.navBar}>
                <label htmlFor="navShow" className={style.menuIcon} checked={showMenu} onChange={handleShowMenu}>
                    {showMenu ? <BiMenu /> : <FaX />}
                </label>
                <ul>
                    <Link to='/'>
                        <li>
                            <span className={style.navIcon}><BiSolidHome /></span>
                            <span className={style.navDesc}>Home</span>
                        </li>
                    </Link>
                    <Link to='/products'>
                        <li>
                            <span className={style.navIcon}><FaCartShopping /></span>
                            <span className={style.navDesc}>Produtos</span>
                        </li>
                    </Link>
                    <Link to='/orders'>
                        <li>
                            <span className={style.navIcon}><BiSolidTruck /></span>
                            <span className={style.navDesc}>Pedidos</span>
                        </li>
                    </Link>
                    <li>
                        <span className={style.navIcon}><IoExitOutline /></span>
                        <span className={style.navDesc}>Sair</span>
                    </li>
                </ul>
            </div></>
    )
}

export default NavBar