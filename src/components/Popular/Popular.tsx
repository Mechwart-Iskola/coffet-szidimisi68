import React, { useEffect, useState } from 'react'
import Popularcard from '../popularCard/Popularcard'
import './popular.css'

type PopularItem = {
  name: string;
  description: string;
  price: string;
  image: string;
};


const Popular = () => {
  {/*Fetcheld be a popular.json-ból az adatokat és tárold le egy állapotváltozóban*/}
  const [populars, setPopulars] = useState<PopularItem[]>([])

  useEffect(()=>{
    fetch("/popular.json")
    .then(x=> x.json())
    .then((data) => setPopulars(data)); 
  })

  {/*Hozz létre egy popularcard komponenst és a lementett adatokat ezen keresztül jelenítsd meg*/}
  return (
    <div className="popular">
      <h2 className="section__title">Popular Coffees</h2>
      <div className="popular__coffes">
        {populars.map((item, index) => (
          <Popularcard key={index} coffee={item} />
        ))}
      </div>
    </div>
  );
}

export default Popular
