import React, { useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import axios from 'axios'
import Cards from './Cards'
import { Element } from 'react-scroll'

function Freebook() {
  const [books, setBooks] = useState([])
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          'http://localhost:3000/api/library',
        )
        const bookData = res.data.filter(
          (item) => item.category === 'Books',
        )
        const articleData = res.data.filter(
          (item) => item.category === 'Articles',
        )
        setBooks(bookData)
        setArticles(articleData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const renderSlider = (items) => {
    const chunks = []
    for (let i = 0; i < items.length; i += 6) {
      chunks.push(items.slice(i, i + 6))
    }
    return chunks.map((chunk, index) => (
      <Slider key={index} {...settings}>
        {chunk.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </Slider>
    ))
  }

  return (
    <Element name='freebook-section'>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
          <h1 className='font-semibold text-xl pb-2'>
            Books
          </h1>
          {renderSlider(books)}
        </div>
        <br />
        <br />
        <div>
          <h1 className='font-semibold text-xl pb-2'>
            Articles
          </h1>
          {renderSlider(articles)}
        </div>
      </div>
    </Element>
  )
}

export default Freebook
