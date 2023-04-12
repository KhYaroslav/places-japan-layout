import { Link } from 'react-router-dom'
import './Benefits.css'
import church from '../../assets/svg/church-icon.svg'
import personal from '../../assets/svg/personal-icon.svg'
import building from '../../assets/svg/building-icon.svg'

export default function Benefits() {
  const cards = [
    { svg: church, title: `Welcome to Odigo!`, desription: `Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.` },
    { svg: personal, title: `Your Personal Japan Guide`, desription: `Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.` },
    { svg: building, title: `Promoting Local Businesses`, desription: `Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.` }
  ]
  
  return (
    <section className="benefits">
      <div className='benefits__wrapper'>
        <h2 className='benefits__title'>
          Benefits of Odigo
        </h2>
        
        <div className='benefits__cards'>
          {cards.map((el, i) =>
            <div className='benefits__card' key={i}>
              <div className="benefits__card-pic">
                <img src={el.svg} alt={el.title} className="benefits__card-thumb" />
              </div>
              <h3 className='benefits__card-title'>
                {el.title}
              </h3>
              <p className='benefits__card-desc'>
                {el.desription}
              </p>
              <Link to='#!' className='benefits__card-more'>
                learn more
              </Link>
            </div>
          )}
        
        </div>
      </div>
    </section>
  )
}
