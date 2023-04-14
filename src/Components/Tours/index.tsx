import './Tours.css'
import tour_1 from '../../assets/images/tour-1.jpg'
import tour_2 from '../../assets/images/tour-2.jpg'
import { Link } from 'react-router-dom'

export default function Tours() {
  const tours = [
    { img: tour_1, title: 'Prefecture in Focus: Tottori', description: `Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door,` },
    { img: tour_2, title: 'Featured Neighborhood: Kyoto’s Arashiyama', description: `Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door,` },
  ]

  return (
    <div className='tours' id='articles'>
      <div className='container'>

        <div className="tours__tour tour">
            <div className='tour__pic'>
              <img src={tours[0].img} alt={tours[0].title} />
            </div>
            <div className='tour__info'>
              <h3 className='tour__title'>
                {tours[0].title}
              </h3>
              <p className="tour__desc">
                {tours[0].description}
              </p>
              <Link to='#!' className='tour__more'>view prefecture</Link>
            </div>
        </div>
        
        <div className="tours__tour tour">
            <div className='tour__info'>
              <h3 className='tour__title'>
                {tours[1].title}
              </h3>
              <p className="tour__desc">
                {tours[1].description}
              </p>
              <Link to='#!' className='tour__more'>view prefecture</Link>
            </div>
          <div className='tour__pic tour__pic_mob-first'>
            <img src={tours[1].img} alt={tours[1].title} />
          </div>
        </div>

      </div>
    </div>
  )
}
