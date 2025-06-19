import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="https://guomao.kg/wp-content/uploads/2024/10/logo.svg" alt="GUOMAO" />
          <h1>GUOMAO</h1>
        </div>

        <nav className="nav">
          <ul>
            <li><a href="/index.html">Главная</a></li>
            <li><a href="#">Каталог</a></li>
            <li><a href="#">Доставка</a></li>
            <li><a href="#">О нас</a></li>
            <li><a href="#footer">Контакты</a></li>
          </ul>
        </nav>

        <div className="actions">
          <button><FontAwesomeIcon icon={faSearch} /></button>
          <button><FontAwesomeIcon icon={faUser} /></button>
          <button className="cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="cart-count">{cartCount}</span>
          </button>
          <button className="menu" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <li><a href="#">Главная</a></li>
            <li><a href="#">Каталог</a></li>
            <li><a href="#">Доставка</a></li>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
