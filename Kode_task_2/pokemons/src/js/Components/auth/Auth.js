import React from 'react';
import { Redirect } from "react-router-dom";
import MD5 from "crypto-js/md5";
import checkSessionKeyInLocalStorage from '../../CheckSessionKeyInLocalStorage';

export default function Auth (props) {
	const { history } = props;

	const checkAuth = (event) => {
		event.preventDefault();

		// Заглушка: логин и пароль должны проверяться на сервере
		const loginValidHashMD5 = '66594f872ada86b3e69092ca068bc9f4';
		const passwordValodHashMD5 = '5d239937721545b67d004c7540d54a0a';

		let enteredLoginHashMD5 = MD5(event.target.login.value).toString();
		let enteredPasswordHashMD5 = MD5(event.target.password.value).toString();

		if ( (enteredLoginHashMD5 === loginValidHashMD5) && (enteredPasswordHashMD5 === passwordValodHashMD5) ) {
			props.setIsLoginPasswordValid( true ); // логин и пароль введены верно
			history.push('/loginOTP')
		} else {
			let inputLogin = document.getElementById('inputLogin');
			if ( enteredLoginHashMD5 !== loginValidHashMD5 ) {
				inputLogin.classList.remove("is-valid");
				inputLogin.classList.add("is-invalid");
			} else {
				inputLogin.classList.remove("is-invalid");
				inputLogin.classList.add("is-valid");
			}

			let inputPassword = document.getElementById('inputPassword');
			if ( enteredPasswordHashMD5 !== passwordValodHashMD5 ) {
				inputPassword.classList.add("is-invalid");
			} else {
				inputPassword.classList.remove("is-invalid");
			}
			
		}

	}

	// Если пользователь не авторизовался (нет sessionKey в localStorage)
	if ( !checkSessionKeyInLocalStorage() ) {
		return (
			<div className="authBox" >
				<form className="form-signin AVAST_PAM_loginform" onSubmit={ checkAuth }>
					<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
	
					<label htmlFor="inputLogin" className="sr-only">Login</label>
					<input type="email" name="login" id="inputLogin" className="form-control" placeholder="Login" required autoFocus></input>
	
					<label htmlFor="inputPassword" className="sr-only">Password</label>
					<input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" required></input>
					
					<button type="submit" className="authBox__submit" >
						<span className="authBox__submit_arrow"><i className="fas fa-arrow-right"></i></span>
					</button>
				</form>
			</div>
		);
	} else {  // sessionKey в localStorage есть => пользователь авторизован
		return (
            <Redirect to="/home" />
        );
	}

}
