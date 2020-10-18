import React from 'react';
import updateProducts from '../products/UpdateProducts';

export default function DropdownCategory (props) {

    return(
        <li> <a href={ props.href } onClick={ updateProducts } > { props.title } </a> </li>
    );

}