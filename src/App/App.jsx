import React from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "../redux/app-reducers";

import './App.css';
import Preloader from "../components/common/Preloader/Preloader";

import {withSuspense} from "../hoc/withSuspense";

import HeaderContainer from "../components/Header/HeaderContainer";
import Navbar from "../components/Navbar/Navbar";

const Login = React.lazy(() => import('../components/Login/Login'));
const ProfileContainer = React.lazy(() => import('../components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('../components/Dialogs/DialogsContainer'));
const News = React.lazy(() => import('../components/News/News'));
const Weather = React.lazy(() => import('../components/Weather/Weather'));
const Music = React.lazy(() => import('../components/Music/Music'));
const Settings = React.lazy(() => import('../components/Settings/Settings'));
const Friends = React.lazy(() => import('../components/Friends/Friends'));
const UsersContainer = React.lazy(() => import('../components/Users/UsersContainer'));


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/' render={()=> <Redirect to={'/profile'}/>}/>
                        <Route path='/login' render={withSuspense(Login)}/>
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                        <Route path='/news' render={withSuspense(News)}/>
                        <Route path='/weather' render={withSuspense(Weather)}/>
                        <Route path='/music' render={withSuspense(Music)}/>
                        <Route path='/settings' render={withSuspense(Settings)}/>
                        <Route path='/friends' render={withSuspense(Friends)}/>
                        <Route path='/users' render={withSuspense(UsersContainer)}/>
                    </Switch>
                </div>
                <Navbar state={this.props.store.sidebar}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App);

