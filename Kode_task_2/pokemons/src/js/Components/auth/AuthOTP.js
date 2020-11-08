import React, { useEffect } from 'react';
import { Redirect } from "react-router-dom";
import MD5 from "crypto-js/md5";
import setSessionKeyInLocalStorage from '../../SetSessionKeyInLocalStorage';
import checkSessionKeyInLocalStorage from '../../CheckSessionKeyInLocalStorage';

export default function Auth (props) {
	const { history } = props;

	const getRandomInt = () => {
		let min = 100000;
		let max = 999999;
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	const checkAuthOTP = (event) => {
		event.preventDefault();
		let enteredCodeOTPHashMD5 = MD5(event.target.codeOTP.value).toString();
		if ( enteredCodeOTPHashMD5 === CodeOTPValidHashMD5 ) {
			setSessionKeyInLocalStorage();
			history.push('/home');
		} else {
			document.getElementById('inputOTP').classList.add("is-invalid");
		}
		
	}

	// Заглушка для OTP:
	// Генерируем рандомное шестизначное число
	// После reander'а спустя 1 секунду alert'ом выводим его пользователю
	const CodeOTPValid = getRandomInt().toString();
	const CodeOTPValidHashMD5 = MD5(CodeOTPValid).toString();

	useEffect(() => {
		if ( props.isLoginPasswordValid ) {
			let delayOTP = setTimeout(() => alert('Authorization code from SMS: ' + CodeOTPValid), 1000);
			
			return () => {
				clearTimeout(delayOTP);
			}
		}
	  },
	  [props.isLoginPasswordValid, CodeOTPValid]
	);

	// Если пользователь не авторизовался (нет sessionKey в localStorage)
	if ( !checkSessionKeyInLocalStorage() ) {
		if ( props.isLoginPasswordValid ) {
			return (
				<div className="authBox" >
					<form className="form-signin AVAST_PAM_loginform" onSubmit={ checkAuthOTP }>
						<h1 className="h3 mb-3 font-weight-normal">Please enter the code</h1>
		
						<label htmlFor="inputOTP" className="sr-only">Code from SMS</label>
						<input type="text" name="codeOTP" id="inputOTP" className="form-control" placeholder="Code from SMS" required autoFocus></input>
						
						<button type="submit" className="authBox__submit" >
							<span className="authBox__submit_arrow"><i className="fas fa-arrow-right"></i></span>
						</button>
					</form>
				</div>
			);
		} else {
			return (
				<Redirect to="/login" />
			);
		}
	} else {  // sessionKey в localStorage есть => пользователь авторизован
		return (
			<Redirect to="/home" />
		);
	}


}
