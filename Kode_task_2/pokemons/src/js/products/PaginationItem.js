import React from 'react';

export default function PaginationItem (props) {

    const updatePaginationPage = (event) => {
        event.preventDefault();

        switch (props.value) {
            case 'Previous':
                props.setPaginationPage(prevpaginationPage => {
                    if (prevpaginationPage - 1 > 0) {
                        return prevpaginationPage - 1;
                    }
                    else return prevpaginationPage;   
                });
                break;
            case 'Next':
                props.setPaginationPage(prevpaginationPage => prevpaginationPage + 1);
                break;
            default:
                props.setPaginationPage( props.value);
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
    

    const countProductPages = Math.ceil(props.productsCountAll / props.limitProducts);
    let classNameCell = 'page-item';
    let classNameLink = 'page-link';

    if ( (props.value === 'Previous') && (props.paginationPage <= 1) ){
        disableItem();
    } else if (props.value === 0) {
        disableItem();
    } else if (countProductPages < props.value) {
        disableItem();
    } else if ( (props.value === 'Next') && (props.paginationPage >= countProductPages) ) {
        disableItem();
    } else {
        enableItem();
    }

    if (props.value === props.paginationPage) {
        highlightItem();
    }   

	return (
        <li className={ classNameCell }>
            <a className={ classNameLink } href="#" onClick={ updatePaginationPage } > { props.value } </a>
        </li>
	);
}