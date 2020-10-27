import React from 'react';
import PaginationItem from './PaginationItem'

export default function Pagination (props) {

	return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                <PaginationItem value={ 'Previous' } paginationPage={ props.paginationPage } 
                    setPaginationPage={ props.setPaginationPage } cardsCountAll={ props.cardsCountAll }
                    limitCards={ props.limitCards } />
                <PaginationItem value={ props.paginationPage - 1} paginationPage={ props.paginationPage } 
                    setPaginationPage={ props.setPaginationPage } cardsCountAll={ props.cardsCountAll }
                    limitCards={ props.limitCards } />
                <PaginationItem value={ props.paginationPage } paginationPage={ props.paginationPage } 
                    setPaginationPage={ props.setPaginationPage } cardsCountAll={ props.cardsCountAll }
                    limitCards={ props.limitCards } />
                <PaginationItem value={ props.paginationPage + 1 } paginationPage={ props.paginationPage } 
                    setPaginationPage={ props.setPaginationPage } cardsCountAll={ props.cardsCountAll }
                    limitCards={ props.limitCards } />
                <PaginationItem value={ 'Next' } paginationPage={ props.paginationPage } 
                    setPaginationPage={ props.setPaginationPage } cardsCountAll={ props.cardsCountAll }
                    limitCards={ props.limitCards } />
            </ul>
        </nav>
    );
    
}
