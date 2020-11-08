import React from 'react';

export default function PaginationItem (props) {

    const updatePaginationPage = (event) => {
        event.preventDefault();

        switch (props.value) {
            case 'Previous':
                props.setPaginationPage(prevPaginationPage => {
                    if (prevPaginationPage - 1 > 0) {
                        return prevPaginationPage - 1;
                    }
                    else return prevPaginationPage;   
                });
                break;
            case 'Next':
                props.setPaginationPage(prevPaginationPage => {
                    if (prevPaginationPage + 1 <= countCardsPages) {
                        return prevPaginationPage + 1;
                    }
                    else return prevPaginationPage;
                });
                break;
            default:
                if ((0 < props.value) && (props.value <= countCardsPages)) {
                    props.setPaginationPage( props.value);
                }
                break;
        }
    }

    const disableItem = () => {
        classNameCell += ' disabled';
        classNameLink += ' text-muted';
    }

    const enableItem = () => {
        classNameLink += ' text-info';
    }

    // Выделение текущей ячейки пагинации
    const highlightItem = () => {
        classNameLink += ' bg-secondary';
    }
    

    const countCardsPages = Math.ceil(props.cardsCountAll / props.limitCards);
    let classNameCell = 'page-item';
    let classNameLink = 'page-link';

    if ( (props.value === 'Previous') && (props.paginationPage <= 1) ){
        disableItem();
    } else if (props.value === 0) {
        disableItem();
    } else if (countCardsPages < props.value) {
        disableItem();
    } else if ( (props.value === 'Next') && (props.paginationPage >= countCardsPages) ) {
        disableItem();
    } else {
        enableItem();
    }

    if (props.value === props.paginationPage) {
        highlightItem();
    }   

	return (
        <li className={ classNameCell }>
            <span className={ classNameLink } onClick={ updatePaginationPage } > { props.value } </span>
        </li>
	);
}
