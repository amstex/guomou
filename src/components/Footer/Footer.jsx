import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInstagram, 
  faFacebook, 
  faWhatsapp, 
  faTelegram 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faMapMarkerAlt, 
  faPhoneAlt, 
  faEnvelope, 
  faClock 
} from '@fortawesome/free-solid-svg-icons';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-col">
            <h3 className="footer-title">GUOMAO</h3>
            <p className="footer-description">
              Доставка товаров из Китая в Кыргызстан. Широкий ассортимент по выгодным ценам.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faTelegram} />
              </a>
            </div>
          </div>

          {/* Catalog */}
          <div className="footer-col">
            <h3 className="footer-subtitle">Каталог</h3>
            <ul className="footer-links">
              <li><a href="#">Электроника</a></li>
              <li><a href="#">Одежда</a></li>
              <li><a href="#">Для дома</a></li>
              <li><a href="#">Автотовары</a></li>
              <li><a href="#">Красота</a></li>
            </ul>
          </div>

          {/* Information */}
          <div className="footer-col">
            <h3 className="footer-subtitle">Информация</h3>
            <ul className="footer-links">
              <li><a href="#">О нас</a></li>
              <li><a href="#">Доставка и оплата</a></li>
              <li><a href="#">Возврат и обмен</a></li>
              <li><a href="#">Политика конфиденциальности</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="footer-col">
            <h3 className="footer-subtitle">Контакты</h3>
            <ul className="contact-info">
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                <span>г. Бишкек, ул. Московская 123</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhoneAlt} className="contact-icon" />
                <span>+996 555 123 456</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <span>info@guomao.kg</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faClock} className="contact-icon" />
                <span>Пн-Пт: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2023 GUOMAO. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;