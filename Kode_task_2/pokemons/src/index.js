import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/styleHome.css';
import './css/navbarLeft.css';
import Header from './js/header/Header';
import Products from './js/products/Products';
import ButtonScrollUp from './js/ButtonScrollUp';
import Footer from './js/footer/Footer';
import * as serviceWorker from './serviceWorker';
const $ = window.$;


ReactDOM.render(
  <React.StrictMode>   
    <Header />
    <div className="wrapper">
      <Products />
      <ButtonScrollUp />
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
