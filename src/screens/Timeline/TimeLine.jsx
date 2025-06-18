import React from "react";
import TimelineItem from "./TimelineItem";
import "./TimeLine.scss";

const timelineData = [
  {
    year: "2015",
    title: "Основание компании",
    description: "Небольшая команда энтузиастов начала помогать друзьям и знакомым с заказами из Китая. Первые 50 успешных доставок.",
  },
  {
    year: "2017",
    title: "Первый офис в Гуанчжоу",
    description: "Открытие представительства в Китае позволило ускорить обработку заказов и улучшить контроль качества.",
  },
  {
    year: "2019",
    title: "1000+ довольных клиентов",
    description: "Преодолен рубеж в 1000 успешных доставок. Запуск собственного интернет-магазина с каталогом товаров.",
  },
  {
    year: "2023",
    title: "Новые горизонты",
    description: "Расширение ассортимента до 5000+ товаров. Партнерство с 20+ проверенными поставщиками. Среднее время доставки сокращено до 12 дней.",
  },
];

const TimelineSection = () => {
  return (
    <section className="timeline-section">
      <div className="container">
        <h2 className="timeline-title">Наша история</h2>
        <div className="timeline-list">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
