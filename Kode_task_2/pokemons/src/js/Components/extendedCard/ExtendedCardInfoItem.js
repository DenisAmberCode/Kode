import React, { useState } from 'react';

export default function ExtendedCardInfoItem(props) {

	const [card, setCard] = useState({
        title: props.title,
        text: props.text
    });

	
	return (
        <div className='infoBox__item'>
            <div className='infoBox__item_title'> { card.title } &nbsp; </div>
            <span className='infoBox__item_text'> { card.text } </span>
        </div>
	);
}
