import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import Header from '../header/Header';
import ExtendedCardInfoItem from './ExtendedCardInfoItem';
import Query from '../../Query';
import checkSessionKeyInLocalStorage from '../../CheckSessionKeyInLocalStorage';
import getObjectProperty from '../../GetObjectProperty';

export default function ExtendedCard (props) {

    const { history } = props;
    const [card, setCard] = useState();
    const [error, setError] = useState( null );
    const [isLoaded, setIsLoaded] = useState( false );  

	useEffect(() => {
            // sessionKey в localStorage есть => пользователь авторизован
            if ( checkSessionKeyInLocalStorage() ) {
                let cardPath = props.location.pathname.slice(1); // Example: cards/xy7-54
                Query(cardPath, {})
                    .then(response => {
                        response.json()
                            .then(result => {
                                if (result.card) {
                                    setCard( {
                                        id: getObjectProperty(result, 'card.id', 'not found'),
                                        name: getObjectProperty(result, 'card.name', 'not found'),
                                        type: getObjectProperty(result, 'card.types.0', 'not found'),
                                        subType: getObjectProperty(result, 'card.subtype', 'not found'),
                                        attackDamage: getObjectProperty(result, 'card.attacks.0.damage', 'not found'),
                                        attackCost: getObjectProperty(result, 'card.attacks.0.cost.0', 'not found'),
                                        resistanceType: getObjectProperty(result, 'card.resistances.0.type', 'not found'),
                                        resistanceValue: getObjectProperty(result, 'card.resistances.0.value', ''),
                                        evolvesFrom: getObjectProperty(result, 'card.evolvesFrom', 'not found'),
                                        artist:  getObjectProperty(result, 'card.artist', 'not found'),
                                        description: getObjectProperty(result, 'card.attacks.0.text', 'not found'),
                                        image: getObjectProperty(result, 'card.imageUrlHiRes', 'not found')
                                    });
                                    setError( null );
                                    setIsLoaded( true );
                                }					
                            })
                    })
                    .catch(error => {
                        setError(error.statusText);
                        setIsLoaded(true);
                    })
            }
        }, 
        [props.location.pathname]
    );

    // sessionKey в localStorage есть => пользователь авторизован
	if ( checkSessionKeyInLocalStorage() ) {
        if ( error ) {
            return <div>Error: { error }</div>;
        } else if ( !isLoaded ) {
            return null;
        } else {
            return (
                <React.Fragment>
                    <Header />
                    <div className="wrapper">
                        <button type="button" className="btn btn-secondary extCard__btn-back" onClick={history.goBack}>
                            <i className="fas fa-arrow-left"></i> Back
                        </button>
                        <div className='extCard'>
                            <div className='imageBox' >
                                <img src={ card.image } alt={card.image }></img>
                            </div>
        
                            <div className='infoBox'>
                                <ExtendedCardInfoItem title='Pokemon Name:' text={ card.name } />
                                <br></br>
                                <ExtendedCardInfoItem title='Type:' text={ card.type } />
                                <ExtendedCardInfoItem title='SubType:' text={ card.subType } />
                                <h2 className="infoBox__line"><span className="infoBox__line_text"> </span></h2>
                                <ExtendedCardInfoItem title='Attack Damage:' text={ card.attackDamage } />
                                <ExtendedCardInfoItem title='Attack Cost:' text={ card.attackCost } />
                                <ExtendedCardInfoItem title='Resistances:' text={ card.resistanceType + ' ' + card.resistanceValue } />
                                <ExtendedCardInfoItem title='Evolves From:' text={ card.evolvesFrom } />
                                <ExtendedCardInfoItem title='Artist:' text={ card.artist } />
                                <ExtendedCardInfoItem title='Description:' text={ card.description } />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
	} else {
        return (
            <Redirect to="/login" />
        );
	}
    


	
}
