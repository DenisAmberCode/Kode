import React, { useEffect } from 'react';
import NavbarLeftDropdown from './NavbarLeftDropdown';
const $ = window.$;

export default function NavbarLeft (props) {

    useEffect(() => {
        $(document).ready(function () {
            $("#sidebar").mCustomScrollbar({
                theme: "minimal"
            });
    
            $('#dismiss, .overlay').on('click', function () {
                $('#sidebar').removeClass('active');
                $('.overlay').removeClass('active');
            });
    
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').addClass('active');
                $('.overlay').addClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            });
        });
      });


	return (
        <React.Fragment>
            <div className="wrapper-aside">
                {/* Sidebar */}
                <nav id="sidebar">
                    <div id="dismiss">
                        <i className="fas fa-arrow-left"></i>
                    </div>

                    <div className="sidebar-header">
                        <h3>Pokemons</h3>
                    </div>

                    <ul className="list-unstyled components">
                        <p>Dummy Heading</p>
                        <NavbarLeftDropdown key={ 1 } title={ "Pokemon type" } href={ "#typeSubmenu" } id={ 'typeSubmenu' } categories={ [ 
							{"title": "Home 1", "href": "#"}, 
							{"title": "Home 2", "href": "#"}, 
							{"title": "Home 3", "href": "#"}, 
							] } />
                        <NavbarLeftDropdown key={ 2 } title={ "Pokemon subtype" } href={ "#subtypeSubmenu" } id={ 'subtypeSubmenu' } categories={ [ 
							{"title": "Page 1", "href": "#"}, 
							{"title": "Page 2", "href": "#"}, 
							{"title": "Page 3", "href": "#"}, 
							] } />
                    </ul>
                </nav>

                {/* Toggler */}
                <div id="content">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <button type="button" id="sidebarCollapse" className="btn btn-info">
                                <i className="fas fa-align-left"></i>
                                <span> Filter</span>
                            </button>

                            <div className="info__found">
                                <span>Found cards:&nbsp;</span>
                                <span className="info__found_result">{ props.productsCountAll }</span>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="overlay"></div>
        </React.Fragment>
    );

}