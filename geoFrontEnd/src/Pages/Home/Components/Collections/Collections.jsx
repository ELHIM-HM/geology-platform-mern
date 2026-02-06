
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import './Collections.css'
import data from './slider.json'
import { sliderSettings } from './sliderSettings'

const Collections = () => {
  return (
    <div>
      <section className='r-wrapper'>
        <div className='paddings innerWidth r-container'>
          <div className='r-head flexColStart'>
            <span className='orangeText'>COLLECTIONS</span>
            <span className='primaryText'>Latest Added Collections</span>
          </div>

          <Swiper {...sliderSettings}>
            <SliderButtons />
            {data.map((card, ind) => {
              return (
                <SwiperSlide key={ind}>
                  <div className='flexColStart r-card'>
                    <img src={card.image} alt='' />
                    <span className='secondaryText r-date'>
                      <span>{card.date}</span>
                    </span>
                    <span className='primaryText'>{card.title}</span>
                    <span className='secondaryText'>{card.detail}</span>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </section>
    </div>
  )
}

export default Collections

const SliderButtons = () => {
  const swiper = useSwiper()
  return (
    <div className='flexCenter r-buttons'>
      <button onClick={()=>swiper.slidePrev()}>&lt;</button>
      <button onClick={()=>swiper.slideNext()}>&gt;</button>
    </div>
  )
}
