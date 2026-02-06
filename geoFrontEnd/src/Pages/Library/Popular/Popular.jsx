// Popular component

import React, { useEffect, useState, useRef } from 'react';
import {
  Swiper,
  SwiperSlide,
  useSwiper,
} from 'swiper/react';
import 'swiper/css';
import './Popular.css';
import axios from 'axios';
import { sliderSettings } from './PopularSettings.js';
import { Link } from 'react-router-dom';

const Popular = () => {
  const [books, setBooks] = useState([]);
  const [articles, setArticles] = useState([]);
  const booksRef = useRef(null); // Reference for OUR BOOKS section

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          'https://apigeo.onrender.com/library',
        );
        const bookData = res.data.filter(
          (item) => item.category === 'Books',
        );
        const articleData = res.data.filter(
          (item) => item.category === 'Articles',
        );
        setBooks(bookData);
        setArticles(articleData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <section className='r-wrapper'>
        <div className='paddings innerWidth r-container'>
          <div className='r-head flexColStart'>
            <span className='orangeText'>
              EXPLORE OUR COLLECTIONS :
            </span>
          </div>

          <h2 ref={booksRef} className='primaryText'>OUR BOOKS</h2> {/* Reference added here */}

          <Swiper {...sliderSettings}>
            <SliderButtons />
            {books.map((card, ind) => (
              <SwiperSlide key={ind}>
                <Link to={card.link}>
                  <div className='flex flex-col items-start bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer h-60' style={{ width: '200px' }}>
                    <img src={card.image} alt={card.name} className='w-full h-32 object-cover mb-2 rounded' />
                    <div className='w-full h-[1px] bg-gray-300 my-2'></div>
                    <div className='flex flex-col items-start overflow-hidden'>
                      <span className='text-gray-600 text-sm mb-1'>{card.date}</span>
                      <span className='text-lg font-semibold mb-1 line-clamp-2'>{card.title}</span>
                      <span className='text-gray-500 text-sm line-clamp-3'>{card.detail}</span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <h2 className='primaryText'>OUR ARTICLES</h2>
          <Swiper {...sliderSettings}>
            <SliderButtons />
            {articles.map((card, ind) => (
              <SwiperSlide key={ind}>
                <Link to={card.link}>
                  <div className='flex flex-col items-start bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer h-60' style={{ width: '200px' }}>
                    <img src={card.image} alt={card.name} className='w-full h-32 object-cover mb-2 rounded' />
                    <div className='w-full h-[1px] bg-gray-300 my-2'></div>
                    <div className='flex flex-col items-start overflow-hidden'>
                      <span className='text-gray-600 text-sm mb-1'>{card.date}</span>
                      <span className='text-lg font-semibold mb-1 line-clamp-2'>{card.title}</span>
                      <span className='text-gray-500 text-sm line-clamp-3'>{card.detail}</span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Popular;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className='flex justify-center space-x-4 mt-4'>
      <button onClick={() => swiper.slidePrev()} className='text-2xl'>&lt;</button>
      <button onClick={() => swiper.slideNext()} className='text-2xl'>&gt;</button>
    </div>
  );
};

