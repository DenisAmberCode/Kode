import React from 'react';
import PaginationItem from './PaginationItem'

export default function Pagination (props) {
    // Провекта значение: > 0
    // Устанавливать disabled

	return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                <PaginationItem value={ 'Previous' } paginationPage={ props.paginationPage } 
                    setPaginationPage={ props.setPaginationPage } productsCountAll={ props.productsCountAll }
                    limitProducts={ props.limitProducts } />
                <PaginationItem value={ props.paginationPage - 1} paginationPage={ props.paginationPage } 
                    setPaginationPage={ props.setPaginationPage } productsCountAll={ props.productsCountAll }
                    limitProducts={ props.limitProducts } />
                <PaginationItem value={ props.paginationPage } paginationPage={ props.paginationPage } 
                    setPaginationPage={ props.setPaginationPage } productsCountAll={ props.productsCountAll }
                    limitProducts={ props.limitProducts } />
                <PaginationItem value={ props.paginationPage + 1 } paginationPage={ props.paginationPage } 
                    setPaginationPage={ props.setPaginationPage } productsCountAll={ props.productsCountAll }
                    limitProducts={ props.limitProducts } />
                <PaginationItem value={ 'Next' } paginationPage={ props.paginationPage } 
                    setPaginationPage={ props.setPaginationPage } productsCountAll={ props.productsCountAll }
                    limitProducts={ props.limitProducts } />
            </ul>
        </nav>
	);
}
