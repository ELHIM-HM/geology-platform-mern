
import './Companies.css'
import comp1 from '../../../../assets/companies/equinix.png'
import comp2 from '../../../../assets/companies/prologis.png'
import comp3 from '../../../../assets/companies/realty.png'
import comp4 from '../../../../assets/companies/tower.png'

const Companies = () => {
  return (
    <section className='c-wrapper'>
      <div className='paddings innerWidth flexCenter c-container'>
        <img src={comp1} alt='' />
        <img src={comp2} alt='' />
        <img src={comp3} alt='' />
        <img src={comp4} alt='' />
      </div>
    </section>
  )
}

export default Companies
