import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/styleHome.css';
import './css/navbarLeft.css';
import Header from './js/header/Header';
import Products from './js/products/Products';
import ButtonScrollUp from './js/ButtonScrollUp'
import Footer from './js/footer/Footer'
import * as serviceWorker from './serviceWorker';
const pokemon = require('pokemontcgsdk')
const $ = window.$;




ReactDOM.render(
  <React.StrictMode>   
    <Header />
    <div className="wrapper">
      <article id="products" className="products"></article>
      <ButtonScrollUp />
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// // Товары выбранной категории (не отображаются при первом рендере)
export const products = ReactDOM.render(<Products products={ [] } />, $("#products")[0]);

pokemon.card.where({ page: 1, pageSize: 10})
.then(cards => {
  console.log(cards);
  if (cards) {
    if (cards.length !== 0) {
      products.setState({
          isLoaded: true,
          error: null,
          products: cards,
          pages: 1,
          productsCountAll: cards.length,
          // title: title,
          // categoryPath: categoryPath,
          sortingCategory: 'popularity'
      });
    }
  }
  $('html, body').animate({scrollTop:0}, 300);
})



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
