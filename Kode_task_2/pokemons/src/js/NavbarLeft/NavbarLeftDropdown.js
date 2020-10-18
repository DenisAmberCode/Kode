import React from 'react';
import DropdownCategory from './DropdownCategory';

export default function NavbarMenuDropdown (props) {

    let children = [];
    let key = 1;
    props.categories.forEach((category) => {
        children.push(<DropdownCategory key={ key } title={ category.title } href={ category.href }/>);
        key ++;
    });

    return(
        <li className="active">
            <a href={ props.href } data-toggle="collapse" aria-expanded="false">
                { props.title }
            </a>
            <ul className="collapse list-unstyled" id={ props.id }>
                { children }
            </ul>
        </li>
    );
}