import './Places.css'
import { Link } from 'react-router-dom'
import Mount_Fuji from '../../assets/images/Mount-Fuji.jpg'
import Kyoto from '../../assets/images/Kyoto.jpg'
import Tokyo from '../../assets/images/Tokyo.jpg'
import Niigata from '../../assets/images/Niigata.jpg'
import Sapporo from '../../assets/images/Sapporo.jpg'

export default function Places() {

  const cards = [
    { title: 'Mount Fuji', img: Mount_Fuji },
    { title: 'Kyoto', img: Kyoto },
    { title: 'Tokyo', img: Tokyo },
    { title: 'Niigata', img: Niigata },
    { title: 'Sapporo', img: Sapporo }
  ]

  return (
    <section className='plases'>
      <div className='container'>
        <div className='places__caption'>
          <h2 className='places__title section__title'>
            Get inspired for your next trip
          </h2>
          <Link to="#!" className="places__view-all">view all</Link>
        </div>

        <div className='places__cards'>
          {cards.map((el, i) =>
            <figure
              className={`places__card ${i < 2 ? 'places__card_size-lg' : 'places__card_size-sm'}`} key={i}>
              <img
                src={el.img}
                alt={el.title}
                className={`places__card-pic ${i < 2 ? 'places__card-pic_size-lg' : 'places__card-pic_size-sm'}`}
              />
              <figcaption className='places__card-title'>
                {el.title}
              </figcaption>
              <Link to='#!' className='places__card-link'></Link>
            </figure> 
          )}
        </div>
      </div>
    </section>
  )
}
