import React from 'react';
import s from './FriendsLink.module.css';
import {NavLink} from "react-router-dom";

import FriendsLinkList from "./FriendsLinkList/FriendsLinkList";

const FriendsLink = (props) => {

    return (
        <div className={s.friendsLinkBlock}>
            <NavLink to='/friends' className={s.friendsLink} activeClassName={s.activeLink}>Friends</NavLink>
            <FriendsLinkList state={props.state}/>
        </div>
    )
}

export default FriendsLink;