import './Top.css';
import top_1 from '../../assets/images/top-1.jpg'
import top_2 from '../../assets/images/top-2.jpg'
import top_3 from '../../assets/images/top-3.jpg'
import top_4 from '../../assets/images/top-4.jpg'
import top_5 from '../../assets/images/top-5.jpg'
import top_6 from '../../assets/images/top-6.jpg'
import { Link } from 'react-router-dom';

export default function Top() {

  const tops = [
    { img: top_1, title: 'NAGOYA', description: `Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.`, likes: 221, comment: 50 },
    { img: top_2, title: 'NIIGATA', description: `Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.`, likes: 221, comment: 50 },
    { img: top_3, title: 'OSAKA', description: `Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.`, likes: 221, comment: 50 },
    { img: top_4, title: 'SAITAMA', description: `Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.`, likes: 221, comment: 50 },
    { img: top_5, title: 'UENO', description: `Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.`, likes: 221, comment: 50 },
    { img: top_6, title: 'SHIBUYA', description: `Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.`, likes: 221, comment: 50 }
  ]

  return (
    <section className='top'>
      <div className='container'>
        <h2 className='top__title section__title'>Today top places to visit</h2>

        <div className='top__cards'>

          {tops.map((el) =>
            <div className='top__card'>
              <div className='top__card-pic'>
                <img src={el.img} alt={el.title} className='top__card-thump' />
                
                <div className='top__card-stats'>
                  <h3 className='top__card-title'>
                    {el.title}
                  </h3>
                  <div className='top__card-likes'>
                    <span className='top__card-likes-value'>
                      {el.likes}
                    </span>
                  </div>
                  <div className='top__card-comments'>
                    <span className='top__card-comments-value'>
                      {el.comment}
                    </span>
                  </div>
                </div>

              </div>
              <p className='top_card-desc'>
                {el.description}
              </p>
              <Link to='#!' className="top__card-link">
                SEE MORE
              </Link>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
