/* eslint-disable react/no-unescaped-entities */

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import './PlatDescreption.css'
import virtualImg from '../../../../assets/header-img/img-3.jpg'
import data from './accordion.jsx'

const PlatDescreption = () => {
  return (
    <section className='v-wrapper'>
      <div className='paddings innerWidth flexCenter v-container'>
        {/* left side */}
        <div className='v-left'>
          <div className='image-container'>
            <img src={virtualImg} alt='' />
          </div>
        </div>
        {/* right side */}
        <div className='flexColStart v-right'>
          <span className='orangeText'>OUR VALUE</span>
          <span className='primaryText'>Welcome to the Geology Platform</span>
          <span className='secondaryText'>
            Explore the world of geology with our platform! Dive into Earth's
            wonders using advanced 3D visualization. Access a wealth of
            educational resources, from interactive lessons to virtual field
            trips.
          </span>

          <Accordion
            className='accordion'
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, index) => {
              return (
                <AccordionItem
                  className={`accordionItem `}
                  key={index}
                  uuid={index}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className='flexCenter accordionButton'>
                      <div className='flexCenter icon'>{item.icon}</div>
                      <span className='primaryText'>{item.heading}</span>
                      <div className='flexCenter icon'>
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className='secondaryText'>{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default PlatDescreption
