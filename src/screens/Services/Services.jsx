import React from "react";
import ServiceCard from "./ServiceCard";
import "./Services.scss";

const Services = () => {
  return (
    <section id="services" className="services improved-section">
      <div className="container">
        <h2>Наши услуги</h2>
        <p className="services-desc">
          Всё для вашего бизнеса с Китаем — от поиска до доставки и поддержки.
        </p>
        <div className="services-grid">
          <ServiceCard
            icon={
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="7" width="18" height="13" rx="2" fill="#fff5f5" stroke="rgb(187,43,43)" strokeWidth="2" />
                <path d="M16 3v4M8 3v4" stroke="rgb(187,43,43)" strokeWidth="2" />
              </svg>
            }
            title="Поиск и подбор товаров"
            text="Поможем найти лучшие предложения на 1688 и Taobao под ваш запрос."
          />

          <ServiceCard
            icon={
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#fff5f5" stroke="rgb(187,43,43)" strokeWidth="2" />
                <path d="M8 12l2 2 4-4" stroke="rgb(187,43,43)" strokeWidth="2" fill="none" />
              </svg>
            }
            title="Выкуп товаров"
            text="Покупаем напрямую у поставщиков, минимизируем риски и заботимся о вашей выгоде."
          />

          <ServiceCard
            icon={
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="4" width="16" height="16" rx="4" fill="#fff5f5" stroke="rgb(187,43,43)" strokeWidth="2" />
                <path d="M8 12h8M12 8v8" stroke="rgb(187,43,43)" strokeWidth="2" />
              </svg>
            }
            title="Проверка качества"
            text="Контролируем качество и комплектность каждого заказа перед отправкой."
          />

          <ServiceCard
            icon={
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M3 12h18M12 3v18" stroke="rgb(187,43,43)" strokeWidth="2" />
                <circle cx="12" cy="12" r="10" fill="#fff5f5" stroke="rgb(187,43,43)" strokeWidth="2" />
              </svg>
            }
            title="Логистика и доставка"
            text="Авиадоставка и автодоставка по выгодным тарифам и в короткие сроки."
          />

          <ServiceCard
            icon={
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#fff5f5" stroke="rgb(187,43,43)" strokeWidth="2" />
                <path d="M12 8v4l3 3" stroke="rgb(187,43,43)" strokeWidth="2" />
              </svg>
            }
            title="Консультации и поддержка"
            text="Отвечаем на вопросы, помогаем на каждом этапе сделки."
          />

          <ServiceCard
            icon={
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="4" width="16" height="16" rx="4" fill="#fff5f5" stroke="rgb(187,43,43)" strokeWidth="2" />
                <path d="M8 16l8-8M8 8h8v8" stroke="rgb(187,43,43)" strokeWidth="2" />
              </svg>
            }
            title="Специальные предложения"
            text="Скидки и бонусы для постоянных клиентов и оптовиков."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
  