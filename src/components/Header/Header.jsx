import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <header className={s.header}>
            <img
                src='https://www.pinclipart.com/picdir/big/72-725136_adventure-trade-association-global-network-of-tour-adventure.png'/>
            <div className={s.loginBlock}>
                {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> :
                    <NavLink to='/login'>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;