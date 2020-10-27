import React, { useState } from 'react';
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Auth from './auth/Auth';
import AuthOTP from './auth/AuthOTP';
import Home from './Home';
import ExtendedCard from './extendedCard/ExtendedCard';

export default function App (props) {
    const history = useHistory();
    const [isLoginPasswordValid, setIsLoginPasswordValid] = useState( false );

	return (
        <React.Fragment>
            <Switch>
                <Route history={ history } path='/login'
                    render={(props) => (
                        <Auth {...props} setIsLoginPasswordValid={ setIsLoginPasswordValid } />
                    )}
                />
                <Route history={ history } path='/loginOTP'
                    render={(props) => (
                        <AuthOTP {...props} isLoginPasswordValid={ isLoginPasswordValid } />
                    )} 
                />
                <Route history={ history } path='/home' component={ Home } />
                <Route history={ history } path='/cards/:cardID' component={ ExtendedCard } />
                <Redirect from='/' to='/login'/>
            </Switch>
        </React.Fragment>
	);
}