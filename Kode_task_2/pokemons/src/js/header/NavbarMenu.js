import React from 'react';
import logo from '../../image/kode-logo.png';

export default function NavbarMenu (props) {

	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="/">
				<img src={ logo } className="d-inline-block align-top kode-logo" alt="kode-logo"></img>
			</a>

			<div className=" navbar-collapse" id="navbarNav">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<a class="nav-link" href="#">Logout</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}