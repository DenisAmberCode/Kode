import React from 'react';

export default function DropdownCategory (props) {
    const updateFilter = (event) => {
        event.preventDefault();
        let filterBy = props.className;  // 'types' or 'subtype'
        let selected = props.title;

        switch (filterBy) {
            case 'types':
                props.setType(selected);
                props.setSubType(undefined);
                props.setPaginationPage(1);
                break;
            case 'subtype':
                props.setSubType(selected);
                props.setType(undefined);
                props.setPaginationPage(1);
                break;
            default:
                break;
        }
    }

    return(
        <li> <a href={ props.href } className={ props.className } onClick={ updateFilter } > { props.title } </a> </li>
    );

}