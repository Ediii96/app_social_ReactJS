import React from 'react';
import s from './FriendsLinkList.module.css';
import {NavLink} from "react-router-dom";


const FriendsLinkList = (props) => {

    let imgElement = props.state.img.map(i => ({i : i.src}));
    let pElement = props.state.friendsName.map(p => ({p : p.name}));
    let linkElement = props.state.linkTo.map(l =>
        <div>
            <NavLink to={l.to}>
                <img src={ imgElement.i }/>
                <p>{ pElement.p }</p>
            </NavLink>
        </div>
    );

    return (
        <div className={s.friendsListBlock}>
            {linkElement}
        </div>
    )
}

export default FriendsLinkList;