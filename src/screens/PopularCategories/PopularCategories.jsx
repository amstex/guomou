import React from 'react';
import './PopularCategories.scss';

const categories = [
  {
    title: 'Электроника',
    img: 'https://www.comnews.ru/sites/default/files2019/styles/large/public/articles/2022-09/%D0%B2%D1%8B%D0%BF%D1%83%D1%81%D0%BA-%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B8_.jpg?itok=eRrqMJUN',
    href: '#',
  },
  {
    title: 'Одежда',
    img: 'https://bishkekvogue.ru/wp-content/uploads/2021/06/odezhda-optom.jpg',
    href: '#',
  },
  {
    title: 'Для дома',
    img: 'https://ixbt.online/live/images/original/04/23/83/2019/11/28/554e8c7480.jpg',
    href: '#',
  },
  {
    title: 'Автотовары',
    img: 'https://sotni.ru/wp-content/uploads/2023/08/zapchasti-mashiny-2-1.webp',
    href: '#',
  },
];

const PopularCategories = () => {
  return (
    <section className="popular-section">
      <div className="container">
        <h2 className="title">Популярные категории</h2>
        <div className="grid">
          {categories.map((category, index) => (
            <a href={category.href} key={index} className="card">
              <img src={category.img} alt={category.title} className="image" />
              <div className="content">
                <h3 className="category-name">{category.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
