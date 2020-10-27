import React, { useEffect } from 'react';
const $ = window.$;

export default function ButtonScrollUp (props) {

	const onClick = () => {
		$('html, body').animate({scrollTop:0}, 300);
	}

	useEffect(() => {
		$(window).scroll(() => {
			if ($(window).scrollTop() > 300) {
				$("#btnScrollUp")[0].style.opacity = 0.8;
			} else {
				$("#btnScrollUp")[0].style.opacity = 0;			
			}
		});

		return () => {
			$(window).off("scroll");
		}
	});

	return (<div id="btnScrollUp" className={ "btnScrollUp" } onClick={ onClick }></div>)

}