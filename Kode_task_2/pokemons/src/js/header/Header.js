import React from 'react';
import logo from '../../image/kode-logo.png';

export default function Header (props) {

	return (
		<div>
			<nav>
				<ul className="navigation">
					<li className="navigation__logo">
						<a className="" href="/">
							<img src={ logo } className="navigation_logo_size" alt="kode-logo"></img>
						</a>
					</li>
					<li>
						<ul className="navigation__items">
							<li><a href="#" className="navigation__logout">Logout</a></li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
	);
}