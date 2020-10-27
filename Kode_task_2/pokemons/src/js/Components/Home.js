import React from 'react';
import { Redirect } from "react-router-dom";
import Header from './header/Header';
import Cards from './cards/Cards';
import ButtonScrollUp from './ButtonScrollUp';
import checkSessionKeyInLocalStorage from '../CheckSessionKeyInLocalStorage';

export default function Home (props) {

    // sessionKey в localStorage есть => пользователь авторизован
	if ( checkSessionKeyInLocalStorage() ) {
        return (
            <React.Fragment>
                <Header />
                <div className="wrapper">
                    <Cards />
                    <ButtonScrollUp />
                </div>
            </React.Fragment>
        );
	} else {
        return (
            <Redirect to="/login" />
        );
	}

}