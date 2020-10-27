import React from 'react';
import DropdownCategory from './DropdownCategory';

export default function NavbarMenuDropdown (props) {

    let children = [];
    let key = 1;
    props.categories.forEach((category) => {
        children.push(<DropdownCategory key={ key } title={ category.title } className={ category.className } 
            href={ category.href } setType={ props.setType } setSubType={ props.setSubType }
            setPaginationPage={ props.setPaginationPage } />);
        key ++;
    });

    return(
        <li className="active dropdown__header">
            <a href={ props.href } data-toggle="collapse" aria-expanded="false">
                { props.title }
                &nbsp;
                <i className="fas fa-caret-down"></i>
            </a>
            <ul className="collapse list-unstyled" id={ props.id }>
                { children }
            </ul>
        </li>
    );
}