import React from 'react'
import './home.css'
import { homeImages } from '../../data/data'

const Home = () => {
    {/*A komponens megírásához szükséges css osztályokat a home.css-ben találod.*/}
    
  {/*A kép több másik képből tevődik össze ezeket egy tömbben találod a data mappában.*/}

  {/*A kép hátterében egy alakzat van.*/}

  {/*A gomb mutasson az about részre */}
  return (
    <div className='home'>
      <h1 className='home__title'>COLD COFFEE</h1>
      <div className='home__images'>
        <div className='home__shape'></div>
        {homeImages.map((image,index)=>(
          <img key={index} src={image.src} alt={image.alt} className={image.className}></img>
        ))}
      </div>
      <div className='home__data'>
        <div className='home__description'>
        Find delicious hot and cold coffees with the 
        best varieties, calm the pleasure and enjoy 
        a good coffee, order now.
        </div>
      </div>
      <a href='#about' className='button button-light'>Learn More</a>
    </div>
  )
}

export default Home
