import Benefits from '../Benefits'
import Footer from '../Footer'
import Form from '../Form'
import Header from '../Header'
import Places from '../Places'
import Top from '../Top'
import Tours from '../Tours'
import Video from '../video'
import './Main.css'

export default function Main() {
  return (
  <>
    <Header />
    
    <main className='main'>
      <div className='intro'>
        <div className="wrapper">
          <h1 className="intro__title">Discover Amazing places in Japan</h1>
          <p className="intro__subtitle">
          Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door, 
          </p>
          <Form />  
        </div>
      </div>
      <Benefits />
      <Places />
      <Tours />
      <Top />
      <Video />
    </main>

    <Footer />
  </>
  )
}
