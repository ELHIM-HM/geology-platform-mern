import React from 'react'
import image_1 from '../pictures/ms-1.jpg'
import image_2 from '../pictures/ms_2.jpg'
import './DestinationStyle.css'

const Destination = () => {
  return (
    <div className='destination'>
      <h1>History of the Museum</h1>
      <h3>Tours give you the opportunity to Discover .</h3>

      <div className='first-des'>
        <div className='des-text'>
          <p>
            The Musée d'Art et d'Histoire, founded in 1923, stands as a beacon
            of cultural and historical preservation. The idea for the museum was
            conceived by a group of passionate historians and art lovers who
            sought to create a space where the rich heritage of our region could
            be showcased and preserved for future generations. Initially housed
            in a modest building, the museum quickly gained popularity,
            prompting a move to its current grand location in the heart of the
            city.
          </p>
          <br />
          <p>
            The museum's architecture is a blend of classical and modern design,
            symbolizing the fusion of past and present. The original building,
            designed by renowned architect Henri Bouchard, features neoclassical
            elements that reflect the grandeur of the early 20th century. Over
            the years, the museum has undergone several expansions, with
            contemporary additions seamlessly integrating with the historic
            structure, creating a unique and inspiring environment for visitors.
          </p>
          <br />
          <p>
            Throughout its history, the Musée d'Art et d'Histoire has hosted
            numerous landmark exhibitions that have attracted visitors from
            around the world. Notable exhibitions include the 1951 showcase of
            Impressionist art, the 1978 display of ancient Egyptian artifacts,
            and the 2002 retrospective of 20th-century modern art. Each
            exhibition not only drew significant attention but also contributed
            to the museum's reputation as a leading cultural institution.
          </p>
        </div>

        <div className='image'>
          <img src={image_1} alt='' />
          <img src={image_2} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Destination
