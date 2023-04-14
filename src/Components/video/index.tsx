import './Video.css';
import video from '../../assets/video/japan.mp4'

export default function Video() {
  return (
    <div className='videos' id='video'> 
      <div className='videos__wrapper'>
        <video autoPlay loop muted className="video__element">
          <source src={video} type="video/mp4"></source>
        </video>
      </div>
    </div>
  )
}
