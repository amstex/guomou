import React from "react";
import OfferCard from "./OfferCard";
import "./Offers.scss";

const Offers = () => {
  return (
    <section id="offers" className="offers improved-section">
      <div className="container">
        <h2>Специальные предложения</h2>
        <div className="offer-cards fade-in">
          <OfferCard
            icon={
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#fff5f5" stroke="rgb(187,43,43)" strokeWidth="2" />
                <path d="M7 13l3 3 7-7" stroke="rgb(187,43,43)" strokeWidth="2" fill="none" />
              </svg>
            }
            title="Скидка 10% на первый заказ"
            text="Для новых клиентов при заказе от 100 кг."
          />
          <OfferCard
            icon={
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="4" width="16" height="16" rx="4" fill="#fff5f5" stroke="rgb(187,43,43)" strokeWidth="2" />
                <path d="M8 12h8" stroke="rgb(187,43,43)" strokeWidth="2" />
              </svg>
            }
            title="Бесплатная доставка"
            text="При сумме заказа от 5000 сом по Бишкеку."
          />
          <OfferCard
            icon={
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <path d="M12 2v20M2 12h20" stroke="rgb(187,43,43)" strokeWidth="2" />
                <circle cx="12" cy="12" r="10" fill="#fff5f5" stroke="rgb(187,43,43)" strokeWidth="2" />
              </svg>
            }
            title="Экспресс-доставка"
            text="Доставка в течение 7 дней за дополнительную плату."
          />
        </div>
      </div>
    </section>
  );
};

export default Offers;
