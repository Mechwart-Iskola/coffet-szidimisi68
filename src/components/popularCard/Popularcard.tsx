import React from 'react'
import './popularcard.css'

type PopularCardProps = {
    coffee: {
      name: string;
      description: string;
      price: string;
      image: string;
    };
  };
  
  const Popularcard: React.FC<PopularCardProps> = ({ coffee }) => {
    return (
      <div className="popular__card">
        <div className="popular__images">
          <div className="popular__shape"/>
            <img src="/img/bean-img.png" alt="" className='popular__bean-1'/>
            <img src="/img/bean-img.png" alt="" className='popular__bean-2'/>
            <img src={coffee.image} alt={coffee.name} className='popular__coffee'/>
        </div>
        <div className="popular__data">
          <h3 className="popular__name">{coffee.name}</h3>
          <p className="popular__description">{coffee.description}</p>
          <a href="" className='button button-dark'>Order now: {coffee.price}</a>
        </div>
      </div>
    );
  };
  
  export default Popularcard;