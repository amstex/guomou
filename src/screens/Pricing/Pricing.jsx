import React from "react";
import PricingRow from "./PricingRow";
import "./Pricing.scss";

const pricingData = [
  { service: "Авиадоставка", rate: "13.5 $/кг", duration: "7–15 дней" },
  { service: "Автодоставка", rate: "4 $/кг", duration: "около 20 дней" },
  { service: "По Кыргызстану", rate: "250 сом", duration: "1–2 дня" },
  { service: "Казахстан/Россия", rate: "от 5 $/кг", duration: "3–15 дней" },
];

const Pricing = () => (
  <section id="pricing" className="pricing">
    <div className="container">
      <h2>Цены и тарифы</h2>
      <table>
        <thead>
          <tr>
            <th>Услуга</th>
            <th>Тариф</th>
            <th>Срок</th>
          </tr>
        </thead>
        <tbody>
          {pricingData.map((item, index) => (
            <PricingRow
              key={index}
              service={item.service}
              rate={item.rate}
              duration={item.duration}
            />
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default Pricing;
