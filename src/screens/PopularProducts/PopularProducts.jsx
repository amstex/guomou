import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './PopularProducts.scss'; // Create this SCSS file

const PopularProducts = () => {
  const [products] = useState([
    {
      id: 1,
      title: "Смартфон Xiaomi Redmi Note 10",
      price: "12,999 сом",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7LHCaA8kS5I9FE3rXuooThHRhM1jK_L30EQ&s",
      rating: 4.5,
      reviews: 24,
      badge: "Хит",
      badgeColor: "primary"
    },
    {
      id: 2,
      title: "Беспроводные наушники TWS",
      price: "1,899 сом",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdkbUbKFVP5oQSLm8VZfVMBUB5H4wxiNmDkA&s",
      rating: 4,
      reviews: 15
    },
    {
      id: 3,
      title: "Умные часы Amazfit GTS 2",
      price: "8,499 сом",
      image: "https://xiaomi.kg/image/cache/catalog/amgroup_moysklad/13066/548963d2-cf63-4b98-9625-fc8f599aa4c5-800x800.jpg",
      rating: 5,
      reviews: 8,
      badge: "Новинка",
      badgeColor: "green-500"
    },
    {
      id: 4,
      title: "Электросамокат Xiaomi Pro 2",
      price: "25,999 сом",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdxM7PZ3NvSFj6ZqaMaKMUnGWIyscvve1PQg&s",
      rating: 4.5,
      reviews: 12
    },
    {
      id: 5,
      title: "Портативная колонка JBL Flip 5",
      price: "6,499 сом",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm71GSAVt5k-9LzZlJaGHLpwNOW2n06ia7wA&s",
      rating: 5,
      reviews: 18,
      badge: "Хит",
      badgeColor: "primary"
    },
    {
      id: 6,
      title: "Электронная книга PocketBook 740",
      price: "15,999 сом",
      image: "https://ir.ozone.ru/s3/multimedia-5/c400/6830748833.jpg",
      rating: 4,
      reviews: 7
    }
  ]);

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