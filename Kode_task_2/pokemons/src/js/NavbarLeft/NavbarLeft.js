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
                        <p>Choose your pokemon:</p>
                        <NavbarLeftDropdown key={ 1 } title={ "Pokemon type" } href={ "#typeSubmenu" } id={ 'typeSubmenu' } categories={ [ 
							{"title": "Colorless", "className": "types", "href": "#"}, 
							{"title": "Darkness", "className": "types", "href": "#"}, 
                            {"title": "Dragon", "className": "types", "href": "#"},
                            {"title": "Fairy", "className": "types", "href": "#"}, 
                            {"title": "Fighting", "className": "types", "href": "#"}, 
                            {"title": "Fire", "className": "types", "href": "#"}, 
                            {"title": "Grass", "className": "types", "href": "#"}, 
                            {"title": "Lightning", "className": "types", "href": "#"}, 
                            {"title": "Metal", "className": "types", "href": "#"}, 
                            {"title": "Psychic", "className": "types", "href": "#"}, 
                            {"title": "Water", "className": "types", "href": "#"},  
							] } 
                            setType={ props.setType } setSubType={ props.setSubType } 
                            setPaginationPage={ props.setPaginationPage } />
                        <NavbarLeftDropdown key={ 2 } title={ "Pokemon subtype" } href={ "#subtypeSubmenu" } id={ 'subtypeSubmenu' } categories={ [ 
							{"title": "EX", "className": "subtype", "href": "#"}, 
							{"title": "Special", "className": "subtype", "href": "#"}, 
                            {"title": "Restored", "className": "subtype", "href": "#"},
                            {"title": "Level Up", "className": "subtype", "href": "#"},
                            {"title": "MEGA", "className": "subtype", "href": "#"},
                            {"title": "Technical Machine", "className": "subtype", "href": "#"},
                            {"title": "Item", "className": "subtype", "href": "#"},
                            {"title": "Stadium", "className": "subtype", "href": "#"},
                            {"title": "Supporter", "className": "subtype", "href": "#"},
                            {"title": "Stage 1", "className": "subtype", "href": "#"},
                            {"title": "GX", "className": "subtype", "href": "#"},
                            {"title": "Pokémon Tool", "className": "subtype", "href": "#"},
                            {"title": "Basic", "className": "subtype", "href": "#"},
                            {"title": "LEGEND", "className": "subtype", "href": "#"},
                            {"title": "Stage 2", "className": "subtype", "href": "#"},
                            {"title": "BREAK", "className": "subtype", "href": "#"},
                            {"title": "Rocket's Secret Machine", "className": "subtype", "href": "#"}, 
							] } 
                            setType={ props.setType } setSubType={ props.setSubType }
                            setPaginationPage={ props.setPaginationPage } />
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
                                <span>Found cards:</span>
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