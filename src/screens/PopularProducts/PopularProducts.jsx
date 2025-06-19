import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './PopularProducts.scss'; 
import productsData from '../../data/products'; 

const PopularProducts = () => {
  const [products] = useState(productsData);

  return (
    <section className="popular-products">
      <div className="container">
        <div className="header">
          <h2>Популярные товары</h2>
          <a href="#" className="view-all">Смотреть все</a>
        </div>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 3
            },
            1024: {
              slidesPerView: 4
            }
          }}
          className="popular-products-swiper"
        >
          {products.map(product => (
            <SwiperSlide key={product.id}>
              <div className="product-card">
                <div className="image-container">
                  <img src={product.image} alt={product.title} />
                  {product.badge && (
                    <span className={`badge bg-${product.badgeColor}`}>
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => {
                      const ratingValue = i + 1;
                      return (
                        <i
                          key={i}
                          className={`fas fa-star ${
                            ratingValue <= Math.floor(product.rating)
                              ? 'full'
                              : product.rating % 1 >= 0.5 && ratingValue === Math.ceil(product.rating)
                                ? 'half'
                                : 'empty'
                          }`}
                        />
                      );
                    })}
                    <span className="reviews">({product.reviews} отзыва)</span>
                  </div>
                  <div className="price-cart">
                    <span className="price">{product.price}</span>
                    <button className="add-to-cart">
                      <i className="fas fa-shopping-cart"></i>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularProducts;