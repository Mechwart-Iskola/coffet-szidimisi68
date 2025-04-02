import React, { useEffect, useState } from 'react'
import "remixicon/fonts/remixicon.css";
import "./header.css"

const Header = () => {
  
    
    {/*Hozz létre egy boolean állapotváltozót. Értéke alapján hozzáadja a nav_menu osztállyal ellátott elemhez a show-menu osztályt.*/}
    const [showMenu, setShowMenu] = useState(false) 

    {/*Hozz létre egy állapotváltozót boolean típussal, amely azt figyeli, hogy kell-e árnyékot állítani a headernek. */}
    const [hasShadow, setHasShadow] = useState(false)

    {/* Ha 50 px-rel lejjebb görgetünk (window.scrollY >= 50), akkor a header osztályú elemhez adjuk hozzá a shadow-header osztályt. */}

    useEffect(()=>{
        const handleScroll = () => {
            setHasShadow(window.scrollY >= 50);
        };
        window.addEventListener("scroll", handleScroll);
    })

    const handlesetShowMenu = (b:boolean)=>{setShowMenu(b)}
    {/*Generáld le a HOME, POPULAR, ABOUT US, PRODUCTS, CONTACT listaelemeket. Mindegyik a megfelelő helyre mutasson az oldalon*/}
        
    {/*A szükséges css osztályokat megtalálod a header.css - ben.*/}

    {/*importáld a remixicont: import "remixicon/fonts/remixicon.css"; */}

    {/*close ikon osztálya: ri-close-large-line */}

    {/*toggle ikon osztálya: ri-apps-2-fill */}

    return(
        <div className={`header ${hasShadow?"shadow-header":''}`}>
            <nav>
                <a href="" className='nav__logo'>Starcoffee</a>
                <div className={`nav__menu ${showMenu?'show-menu':''}`}>
                    <ul className='nav__list'>
                        <li><a href="#home" className='nav__link'>Home</a></li>
                        <li><a href="#popular" className='nav__link'>Popular</a></li>
                        <li><a href="#aboutus" className='nav__link'>About Us</a></li>
                        <li><a href="#products" className='nav__link'>Products</a></li>
                        <li><a href="#contact" className='nav__link'>Contact</a></li>
                    </ul>
                    <div onClick={()=>handlesetShowMenu(false)} className='nav__close'>
                        <i className='ri-close-large-line'></i>
                    </div>
                </div>
                <div onClick={()=>handlesetShowMenu(true)} className='nav__toggle'>
                        <i className='ri-apps-2-fill'></i>
                    </div>
            </nav>
        </div>
    )
}

export default Header
