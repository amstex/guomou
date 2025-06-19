import React from 'react';
import './PopularCategories.scss';
import categories from '../../data/categories'; 

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
