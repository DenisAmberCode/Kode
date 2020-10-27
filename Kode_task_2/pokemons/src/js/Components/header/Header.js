import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../../image/kode-logo.png';
import deleteSessionKeyFromLocalStorage from '../../DeleteSessionKeyFromLocalStorage';

export default function Header (props) {

	const logout = () => {
		deleteSessionKeyFromLocalStorage();
	}

	return (
		<div>
			<nav>
				<ul className="navigation">
					<li className="navigation__logo">
						<Link to="/home" >
							<img src={ logo } className="navigation_logo_size" alt="kode-logo"></img>
						</Link>
					</li>
					<li>
						<ul className="navigation__items">
							<li>
								<Link to="/login" className="navigation__logout" onClick={ logout } >
									Logout
								</Link>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
	);
}